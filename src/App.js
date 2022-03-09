import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import ProductScreen from './screens/ProductScreen';


export default function App() {
  return (
    <Router>
      <div>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          {/* <Route path="/dishes" component={Dishes}/>
          <Route path="/deserts" component={dishes}/>
          <Route path="/drinks" component={dishes}/>
          <Route path="/contact" component={dishes}/> */}
          <Route path="/:categoryName" element={<CategoryScreen/>}/>
          <Route path="/product/:categoryName/:productName" element={<ProductScreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

