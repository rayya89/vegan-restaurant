import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import IngredientList from '../components/IngredientList'
import NutritionTable from '../components/NutritionTable'
import getCategoryByName from '../scripts/getCategoryByName'

export default function ProductScreen() {
    const {categoryName, productName} = useParams();
    const navigate = useNavigate();
    const categoryInfo = getCategoryByName(categoryName);
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
