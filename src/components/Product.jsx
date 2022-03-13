//NPM packages
import { Link, useLocation } from 'react-router-dom'
import getImage from '../scripts/getImage';

export default function Product( { product }) {

    const { name, shortDescription, image } = product;

    //Properties
    const location = useLocation();
    const imageSrc = getImage(image);

    return (
             <div className="product-container">
                <img src={imageSrc} alt="product thumbnail"/>
                    <div className="product-detail">
                        <Link className="text-link" to={`${location.pathname}/${name}`}><h2>{name}</h2></Link>
                        <p>{shortDescription}</p>
                    </div>
            </div>
         )
}
