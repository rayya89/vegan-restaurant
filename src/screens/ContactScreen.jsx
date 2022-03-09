import React from 'react'

export default function ContactScreen() {
  return (
    <div>
        <h1>Chef img</h1>
        <article>
            <h2>Opening hours</h2>
            <ul>
                <li>Monday to Friday: 09:00 am - 11:00 pm </li>
                <li>Saturday: 10:00 am - 08:00 pm </li>
                <li>Sunday: 10:00 am - 06:00 </li>
            </ul>
        </article>
        <article>
            <h2>Book a table</h2>
            <form>
                <label>Full Name:</label>
                <input type="text" placeholder='ex: John Doe'/>
                <label>Email:</label>
                <input type="email" placeholder='ex: JohnDoe@email.com'/>
                <label>Date:</label>
                <input type="date"/>
                <label>Time:</label>
                <input type="datetime-local"/>
            </form>
        </article>
        <article>
            <h2>Address</h2>
            <span>Kemivagen 7A, Gothenburg, Sweden.</span>
        </article>
        <h1>map img</h1>
    </div>
  )
}
