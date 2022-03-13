//NPM packages
import { Link, useLocation } from 'react-router-dom'
import getImage from '../scripts/getImage';

export default function ProductList( { productList }) {

    const { name, shortDescription, image } = productList;

    //Properties
    const location = useLocation();
    const imageSrc = getImage(image);

    return (
             <div>
                <img src={imageSrc} alt="product thumbnail"/>
                <Link to={`${location.pathname}/${name}`}><h2>{name}</h2></Link>
                <p>{shortDescription}</p>
            </div>
         )
}
