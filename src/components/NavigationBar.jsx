import React from 'react'
import { Link } from 'react-router-dom'
import categories from '../data/categories.json'

export default function NavigationBar() {

  const LogoImage = require("../assets/pictures/Logo.png");

  return (
    <nav>
        <Link to="/"><img src={LogoImage} alt="logo"/></Link>
        <ul>
        {categories.map(category => (
          <Link key={category.id} className="text-link" to={`${category.name}`}><li key={category.id}>{category.name}</li></Link>
        ))}
            <Link className="text-link" to="/contact"><li>Contact us</li></Link>
        </ul>
    </nav>
  )
}
