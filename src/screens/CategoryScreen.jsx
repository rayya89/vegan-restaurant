//NPM Packages
import { useParams } from 'react-router-dom'

//Project Files
import ProductList from '../components/ProductList';
import getCategoryByName from '../scripts/getCategoryByName';

export default function CategoryScreen( ) {

    //Properties
    const { categoryName } = useParams();
    const categoryInfo = getCategoryByName(categoryName);

    //Components
    const CategoryProducts = categoryInfo[0].products.map((productList)=> <ProductList key={productList.id} productList={ productList }/>)

    return (
        <div>
            <h1>{categoryInfo[0].name}</h1>
            <p>{categoryInfo[0].motivation}</p> 
            {CategoryProducts}
            </div>
            )
}
