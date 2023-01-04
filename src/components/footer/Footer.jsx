import React from 'react'
import './footer.css'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';


const Footer = () => {
  return (
		<div>
			<footer>
				<a href='#' className='footer__logo'>
					PATRICK
				</a>

				<ul className='permalinks'>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#experience'>Experience</a>
					</li>
					<li>
						<a href='#services'>Services</a>
					</li>
					<li>
						<a href='#portfolio'>Portfolio</a>
					</li>
					<li>
						<a href='#testimonials'>Recommendations</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>

				<div className='footer__socials'>
					<a href='https://www.instagram.com/mukunzipatrick/'>
						<FiInstagram />
					</a>
					<a href='https://twitter.com/mukunzipat'>
						<IoLogoTwitter />
					</a>
					<a href='https://www.facebook.com/mukunzi.patrick.9'>
						<FaFacebookF />
					</a>
				</div>

        <div className="footer__copyright">
          <small>&copy; Patrick. All rights reserved.</small>
        </div>
			</footer>
		</div>
	);
}

export default Footer