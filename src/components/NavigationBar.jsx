import React from 'react'
import logo from '../assests/logo.png'
import { Link } from 'react-router-dom' 

export default function NavigationBar() {
  return (
    <nav>
        <Link to="/"><img src={logo} alt="logo"/></Link>
        <ul>
            <Link to="/dishes"><li>Dishes</li></Link>
            <Link to="/deserts"><li>Deserts</li></Link>
            <Link to="/drinks"><li>Drinks</li></Link>
            <Link to="/contact"><li>Contact us</li></Link>
        </ul>
    </nav>
  )
}
