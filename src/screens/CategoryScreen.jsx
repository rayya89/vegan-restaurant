import React from 'react'
import { useParams , Link, useLocation } from 'react-router-dom'
import categories from '../data/categories.json'
import Product from '../components/Product';

export default function CategoryScreen( ) {
    const { categoryName } = useParams();
    const location = useLocation();
    const categoryInfo = categories.filter(category => category.name === categoryName);

    const Products = categoryInfo[0].products.map((productList)=> <Product key={productList.id} productList={ productList }/>)

    return (
        <div>
            <h1>{categoryInfo[0].name}</h1>
            <p>{categoryInfo[0].motivation}</p> 
            {Products}
            </div>)

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
