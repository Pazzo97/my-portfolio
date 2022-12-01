import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
		<div className='header__socials'>
			<a href='https://linkedin.com' target='__blank'>
				<BsLinkedin />
			</a>
			<a href='https://github.com' target='__blank'>
				<FaGithub />
			</a>
			<a href='https://angellist.com' target='__blank'>
				<FaAngellist />
			</a>
		</div>
	);
}

export default HeaderSocials