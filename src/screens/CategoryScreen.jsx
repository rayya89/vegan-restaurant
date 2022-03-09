import React from 'react'
import { useParams } from 'react-router-dom'
import categories from '../data/categories.json'

export default function CategoryScreen( ) {
    const params = useParams();
    console.log(params);

    const categoryInfo = categories.filter(category => category.name === params.name);
    console.log(categoryInfo);

  return (
    <div>
        <h1>{categoryInfo[0].name}</h1>
        <p>{categoryInfo[0].motivation}</p>
        {categoryInfo[0].products.map (product => {
            return (
                <div key={product.id}>
                    <h2>{product.image}</h2>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                </div>
            )
        })}

    </div>
  )
}
