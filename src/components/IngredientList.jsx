import React from 'react'

export default function IngredientList({ ingredients }) {

  return (
     <section>
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map(ingredient => 
              {return (<li key={ingredient}>{ingredient}</li>)})}
          </ul>
        </section>
  )
}
