import React from 'react'
import OwnerImage from "../assests/owner.jpg";
import MapImage from "../assests/map.jpg"

export default function ContactScreen() {
  return (
    <div className='contact-screen'>
        <img src={OwnerImage} alt="the owner of this restaurant"/>
        <section>
            <h3>Opening times</h3>
            <ul>
                <li>Mon-Fri: 9:00 am to 11:00 pm </li>
                <li>Sat, Sun: 10:00 am to 10:00 pm </li>
            </ul>
        </section>
        <section>
            <h3>Book a table</h3>
            <form>
                <label>Full Name:</label>
                <input type="text" placeholder='ex: John Doe'/>
                <label>Email:</label>
                <input type="email" placeholder='ex: JohnDoe@email.com'/>
                <label>Date and Time:</label>
                <input type="datetime-local"/>
            </form>
        </section>
        <section>
            <h3>Address</h3>
            <p>Kemivagen 7A, Gothenburg, Sweden.</p>
        </section>
        <img src={MapImage} alt="a map screenshot that shows the location of the restaurant"/>
    </div>
  )
}
