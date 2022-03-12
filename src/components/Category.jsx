import React from 'react'
import { Link } from 'react-router-dom'

export default function Category({ categoryInfo }) {

    const { name, image, motivation } = categoryInfo;
    const imageSrc = require(`../assets/pictures/${image}`);

  return (
        <div className="category-info">
            <img src={imageSrc} alt="category thumbnail"/>
            <section>
            <h2>{name}</h2>
            <p>{motivation}</p>
            <Link to={`${name}`}><button className="button-secondary">View menu</button></Link>
            </section>
        </div>
        )}

