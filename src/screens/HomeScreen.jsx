import React from 'react'
import { Link } from 'react-router-dom'
import categories from '../data/categories.json'

export default function HomeScreen() {

  return (
    <div>
        <h1>Vegado</h1>
        <h3>Come hungry Leave Happy</h3>
           {categories.map(category => (
             <section key={category.id}>
               <h1>{category.image}</h1>
               <article>
               <h2>{category.name}</h2>
               <p>{category.motivation}</p>
               <Link to={`${category.name}`}><button>View menu</button></Link>
               </article>
             </section>
           ))
           }
    </div>
  )
}
