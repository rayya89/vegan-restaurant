import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen'

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
          <Route path="/category/:name" exact element={<CategoryScreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

