import React from 'react'
import { useParams , Link, useLocation } from 'react-router-dom'
import categories from '../data/categories.json'

export default function CategoryScreen( ) {
    const params = useParams();
    const location = useLocation();

    const categoryInfo = categories.filter(category => category.name === params.categoryName);

  return (
    <div>
        <h1>{categoryInfo[0].name}</h1>
        <p>{categoryInfo[0].motivation}</p>
        {categoryInfo[0].products.map (product => {
            return (
                <div key={product.id}>
                    <h2>{product.image}</h2>
                    <Link to={`/product${location.pathname}/${product.name}`}><h2>{product.name}</h2></Link>
                    <p>{product['short-description']}</p>
                </div>
            )
        })}

    </div>
  )
}
