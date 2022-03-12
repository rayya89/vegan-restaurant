import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import categories from '../data/categories.json'
import IngredientList from '../components/IngredientList'
import NutritionTable from '../components/NutritionTable'

export default function ProductScreen() {
    const {categoryName, productName} = useParams();
    const navigate = useNavigate();
    const categoryInfo = categories.filter(category => category.name === categoryName);
    const productInfo = categoryInfo[0].products.filter(product => product.name === productName);
    const imageSrc = require(`../assets/pictures/${productInfo[0].image}`);
    const ingredientsList = <IngredientList ingredients={productInfo[0].ingredients} />;
    const nutritionTable = <NutritionTable tableData={productInfo[0].nutritionFacts}/>


  return (
    <div>
        <img src={imageSrc} alt="product"/>
        <h1>{productInfo[0].name}</h1>
        <p>{productInfo[0].longDescription}</p>
        {ingredientsList}
        {nutritionTable}
        <button onClick={() => navigate(-1)}>Go back</button>

    </div>
  )
}
