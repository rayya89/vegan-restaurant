//NPM packages
import { useNavigate } from 'react-router-dom'
import getImage from '../scripts/getImage';

export default function Category({ categoryInfo }) {
    const { name, image, motivation } = categoryInfo;
    
    //Properties
    const navigate= useNavigate();
    const imageSrc = getImage(image);

  return (
        <div className="category-info">
            <img src={imageSrc} alt="category thumbnail"/>
            <section>
            <h2>{name}</h2>
            <p>{motivation}</p>
            <button onClick={() => navigate(`${name}`)} className="button-secondary">View menu</button>
            </section>
        </div>
        )}

