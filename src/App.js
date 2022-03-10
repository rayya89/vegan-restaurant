//NPM packages
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Project files
import NavigationBar from './components/NavigationBar';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import ProductScreen from './screens/ProductScreen';
import ContactScreen from './screens/ContactScreen';
import Footer from './components/Footer';
import "./styles/styles.css"


export default function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/:categoryName" element={<CategoryScreen/>}/>
          <Route path="/product/:categoryName/:productName" element={<ProductScreen/>}/>
          <Route path="/contact" element={<ContactScreen/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

