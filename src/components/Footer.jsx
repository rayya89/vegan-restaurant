import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  return (
    <div>
        <footer>
            {/* <article className="social-media">
                <small>Follow us</small>
                <ul>
                    <li><FontAwesomeIcon icon={faTwitter}/></li>
                    <li><FontAwesomeIcon icon={faInstagram}/></li>
                    <li><FontAwesomeIcon icon={faFacebook}/></li>
                </ul>
            </article>
            <article className="contact">
                <ul>
                <li><FontAwesomeIcon icon={faMapMarker} /><small>Kemivagn 7A, Gothenburg</small></li>
                <li><FontAwesomeIcon icon={faPhoneSquare}/><small>0737786886</small></li>
                </ul>
            </article> */}
            <p> &copy; {new Date().getFullYear()} &bull; Raya Altarabulsi  </p>
        </footer>
    </div>
  )
}
