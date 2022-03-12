import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Category({ categoryInfo }) {

    const { name, image, motivation } = categoryInfo;
    const imageSrc = require(`../assets/pictures/${image}`);
    const navigate= useNavigate();

  return (
        <div className="category-info">
            <img src={imageSrc} alt="category thumbnail"/>
            <section>
            <h2>{name}</h2>
            <p>{motivation}</p>
            <button onClick={() => navigate(`${name}`)} className="button-secondary">View menu</button>
            </section>
        </div>
        )}

