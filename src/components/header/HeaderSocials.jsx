import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaMediumM } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
		<div className='header__socials'>
			<a href='https://www.linkedin.com/in/patrick-mukunzi/' target='__blank'>
				<BsLinkedin className='header__socials-icon' />
			</a>
			<a href='github.com/Pazzo97' target='__blank'>
				<FaGithub className='header__socials-icon' />
			</a>
			<a href='https://medium.com/@pazzomuk' target='__blank'>
				<FaMediumM className='header__socials-icon' />
			</a>
		</div>
	);
}

export default HeaderSocials
