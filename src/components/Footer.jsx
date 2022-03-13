//NPM Packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons' 
import { faMapMarker, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div>
        <footer>
            <section className="social-media">
                <small>Follow us</small>
                <ul>
                    <li><FontAwesomeIcon className="brand-icon" icon={faTwitter}/></li>
                    <li><FontAwesomeIcon className="brand-icon" icon={faInstagram}/></li>
                    <li><FontAwesomeIcon className="brand-icon" icon={faFacebook}/></li>
                </ul>
            </section>
            <section className="contact">
                <ul>
                <li><FontAwesomeIcon className="contact-icon" icon={faMapMarker} /><small>Kemivagn 7A, Gothenburg</small></li>
                <li><FontAwesomeIcon className="contact-icon" icon={faPhoneSquare}/><small>0737786886</small></li>
                </ul>
            </section>
        </footer>
    </div>
  )
}
