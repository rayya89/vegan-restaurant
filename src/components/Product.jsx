import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Product( { productList }) {

    const { name, shortDescription, image } = productList;
    const imageSrc = require(`../assets/pictures/${image}`);
    const location = useLocation();

    return (
             <div>
                <img src={imageSrc} alt="product thumbnail"/>
                <Link to={`/product${location.pathname}/${name}`}><h2>{name}</h2></Link>
                <p>{shortDescription}</p>
            </div>
         )
}
