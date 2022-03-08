import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <Router>
      <div>
        <NavigationBar/>
        <Routes>
          {/* <Route path="/" exact component={Home}/> */}
          {/* <Route path="/dishes" component={Dishes}/>
          <Route path="/deserts" component={dishes}/>
          <Route path="/drinks" component={dishes}/>
          <Route path="/contact" component={dishes}/> */}
        </Routes>
      </div>
    </Router>
  );
}

