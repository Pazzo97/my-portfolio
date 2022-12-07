import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_8espz5m',
				'template_h2sf3sn',
				form.current,
				'M3_BvkH36_4UBKake',
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);

      e.target.reset()
	};

	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineMail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>pazzomuk@gmail.com</h5>
						<a href='mailto:pazzomuk@gmail.com' target='_blank'>
							Send a message
						</a>
					</article>

					<article className='contact__option'>
						<RiMessengerLine className='contact__option-icon' />
						<h4>Messenger</h4>
						<h5>Patrick MUKUNZI</h5>
						<a href='https://m.me/mukunzi.patrick.9' target='_blank'>
							Send a message
						</a>
					</article>

					<article className='contact__option'>
						<BsWhatsapp className='contact__option-icon' />
						<h4>WhatsApp</h4>
						<h5>+250789287020</h5>
						<a
							href='https://api.whatsapp.com/send?phone+250789287020'
							target='_blank'>
							Send a message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input type='email' name='email' placeholder='Your Email' required />

					<textarea
						name='message'
						rows='7'
						placeholder='Your Message'
						required></textarea>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
