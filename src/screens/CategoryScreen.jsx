import React from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../components/ProductList';
import getCategoryByName from '../scripts/getCategoryByName';

export default function CategoryScreen( ) {
    const { categoryName } = useParams();
    // const categoryInfo = categories.filter(category => category.name === categoryName);
    const categoryInfo = getCategoryByName(categoryName);

    const categoryProducts = categoryInfo[0].products.map((productList)=> <ProductList key={productList.id} productList={ productList }/>)

    return (
        <div>
            <h1>{categoryInfo[0].name}</h1>
            <p>{categoryInfo[0].motivation}</p> 
            {categoryProducts}
            </div>
            )

//   return (
//     <div>
//         <h1>{categoryInfo[0].name}</h1>
//         <p>{categoryInfo[0].motivation}</p>
//         {categoryInfo[0].products.map (product => {
//             return (
//                 <div key={product.id}>
//                     <img src={product.image} alt="product thumbnail"/>
//                     <Link to={`/product${location.pathname}/${product.name}`}><h2>{product.name}</h2></Link>
//                     <p>{product['short-description']}</p>
//                 </div>
//             )
//         })}

//     </div>
//   )
}
