import React from 'react'
import logo from '../assests/Logo.png'
import { Link } from 'react-router-dom'
import categories from '../data/categories.json'

export default function NavigationBar() {
  return (
    <nav>
        <Link to="/"><img src={logo} alt="logo"/></Link>
        <ul>
        {categories.map(category => (
          <Link to={`${category.name}`}><li key={category.id}>{category.name}</li></Link>
        ))}
            <Link to="/contact"><li>Contact us</li></Link>
        </ul>
    </nav>
  )
}
