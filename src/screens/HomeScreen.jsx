//Project files
import restaurantData from "../data/restaurantData.json";
import Category from "../components/Category";

// should be HomePage instead of HomeScreen, same for the other pages
export default function HomeScreen() {
  //Components
  const Catigories = restaurantData.map((categoryInfo) => (
    <Category key={categoryInfo.id} categoryInfo={categoryInfo} />
  ));

  return (
    <div className="home-screen">
      <div className="hero">
        <div className="brand-container">
          <h1>Vegado</h1>
          {/* Semantics -1, you dont use "h3" to make text smaller. This is a slogan so just use a span */}
          {/* IF you had used h2, we could discuss about a subittle being h2, but using h3 clearly show you used it to make the font smaller not to follow semantics */}
          <h3>Come hungry Leave healthy</h3>
        </div>
      </div>
      {Catigories}
    </div>
  );
}
