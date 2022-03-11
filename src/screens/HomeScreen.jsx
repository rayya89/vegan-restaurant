import React from 'react'
import { Link } from 'react-router-dom'
import categories from '../data/categories.json'

export default function HomeScreen() {


  return (
    <div className='home-screen'>
      <div className="hero">
        <div className="brand-container">
        <h1>Vegado</h1>
        <h3>Come hungry Leave healthy</h3>
        </div>
      </div>
           {categories.map(category => (
             <section className="categories-container" key={category.id}>
               <img src={category.image} alt="category thumbnail"/>
               <h1>{category.image}</h1>
               <article>
               <h2>{category.name}</h2>
               <p>{category.motivation}</p>
               <Link to={`${category.name}`}><button className="button-secondary">View menu</button></Link>
               </article>
             </section>
           ))
           }
    </div>
  )
}
