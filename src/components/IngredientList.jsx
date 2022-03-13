
export default function IngredientList({ ingredients }) {

  return (
     <section className="ingredient-list">
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map(ingredient => 
              {return (<li key={ingredient}>{ingredient}</li>)})}
          </ul>
        </section>
  )
}
