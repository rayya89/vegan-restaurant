import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import categories from '../data/categories.json'

export default function ProductScreen() {
    const params = useParams();
    const navigate = useNavigate();

    const categoryInfo = categories.filter(category => category.name === params.categoryName);
    const productInfo = categoryInfo[0].products.filter(product => product.name === params.productName);
    
  return (
    <div>
        <h1>{productInfo[0].image}</h1>
        <h1>{productInfo[0].name}</h1>
        <p>{productInfo[0]['long-description']}</p>
        <section>
          <h2>Ingredients</h2>
          <ul>
            {productInfo[0].ingredients.map(ingredient => 
              {return (<li key={ingredient}>{ingredient}</li>)})}
          </ul>
        </section>
        <section>
          <table>
            <caption>Nutrition Facts</caption>
            <tbody>
            <tr><td>Calories</td><td colSpan={2}>{productInfo[0]['nutrition-facts'].calories}</td></tr>
            <tr><td colSpan={3}>% Daily Value</td></tr>
            {productInfo[0]['nutrition-facts'].nutrients.map(cell =>
              {return(
                <tr><td>{cell.nutrient}</td><td>{cell.amount}</td><td>{cell['daily value']}</td></tr>
              )}
              )}
          </tbody>
          </table>
        </section>
        <button onClick={() => navigate(-1)}>Go back</button>

    </div>
  )
}
