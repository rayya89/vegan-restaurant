//NPM Packages
import { Link } from "react-router-dom";
import getImage from "../scripts/getImage";

//Project files
import restaurantData from "../data/restaurantData.json";

export default function NavigationBar() {
  //Properties
  const LogoImage = getImage("Logo.png");

  return (
    <nav>
      <Link to="/">
        <img src={LogoImage} alt="logo" />
      </Link>
      <ul>
        {/* NEsting -1 */}
        {/* The whole project has compennts created before the return, what happened here? */}
        {restaurantData.map((category) => (
          <Link key={category.id} className="text-link" to={`${category.name}`}>
            <li key={category.id}>{category.name}</li>
          </Link>
        ))}
        <Link className="text-link" to="/contact">
          <li>Contact us</li>
        </Link>
      </ul>
    </nav>
  );
}
