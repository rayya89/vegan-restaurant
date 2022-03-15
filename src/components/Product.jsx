//NPM packages
import { useLocation, useNavigate } from "react-router-dom";
import getImage from "../scripts/getImage";

// good
export default function Product({ product }) {
  const { name, shortDescription, image } = product;

  //Properties
  const location = useLocation();
  const imageSrc = getImage(image);
  const navigate = useNavigate();

  return (
    <div className="product-container">
      <img
        onClick={() => navigate(`${location.pathname}/${name}`)}
        src={imageSrc}
        alt="product thumbnail"
      />
      <div className="product-detail">
        <h2 onClick={() => navigate(`${location.pathname}/${name}`)}>{name}</h2>
        <p>{shortDescription}</p>
      </div>
    </div>
  );
}
