import React from 'react'
import categories from '../data/categories.json'
import Category from '../components/Category'

export default function HomeScreen() {

  const Catigories = categories.map((categoryInfo)=> <Category key={categoryInfo.id} categoryInfo={categoryInfo}/>);

  return(
    <div className='home-screen'>
        <div className="hero">
        <div className="brand-container">
        <h1>Vegado</h1>
        <h3>Come hungry Leave healthy</h3>
        </div>
      </div>
          {Catigories}
      </div>
  )
}
