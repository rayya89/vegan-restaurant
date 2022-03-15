//NPM Packages
import { useParams } from "react-router-dom";

//Project Files
import Product from "../components/Product";
import getCategoryByName from "../scripts/getCategoryByName";

// great
export default function CategoryScreen() {
  //Properties
  const { categoryName } = useParams();
  const categoryInfo = getCategoryByName(categoryName);

  //Components
  const ProductList = categoryInfo[0].products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <div className="category-screen">
      <section className="category-title">
        <h1>{categoryInfo[0].name}</h1>
        <p>{categoryInfo[0].motivation}</p>
      </section>
      {ProductList}
    </div>
  );
}
