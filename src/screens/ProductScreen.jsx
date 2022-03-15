//NPM Packages
import { useParams, useNavigate } from "react-router-dom";

//Project files
import IngredientList from "../components/IngredientList";
import NutritionTable from "../components/NutritionTable";
import getCategoryByName from "../scripts/getCategoryByName";
import getImage from "../scripts/getImage";

export default function ProductScreen() {
  const { categoryName, productName } = useParams();

  //Properties
  const navigate = useNavigate();
  // Nice idea of geting the category usin a function but...
  const categoryInfo = getCategoryByName(categoryName);

  // Why did you did not do the same for productInfo?
  const productInfo = categoryInfo[0].products.filter(
    (product) => product.name === productName
  );
  const imageSrc = getImage(productInfo[0].image);

  //Components
  // Incorrect use of a component -1
  // You arent looping here, thus just use the components directly, see refactor Below
  const ingredientsList;
  const nutritionTable;

  return (
    <div className="product-screen">
      <img src={imageSrc} alt="product" />
      <h2>{productInfo[0].name}</h2>
      <p>{productInfo[0].longDescription}</p>
      <IngredientList ingredients={productInfo[0].ingredients} />
      <NutritionTable tableData={productInfo[0].nutritionFacts} />
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
