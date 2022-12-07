import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import about3 from '../../assets/about3.jpeg';

const About = () => {
	return (
		<section id='about'>
			<h5>Get to know</h5>
			<h2>About me!</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={about3} alt='about3' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>1+ years working</small>
						</article>
						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>20+ projects</small>
						</article>
					</div>

					<p>
						I am a bachelor’s degree holder in Business and Information
						Communication and Technology majoring in Software development. I
						completed learning program remotely as a Software developer at
						Microverse, where the curriculum was focused on teaching software
						developers working remotely and the soft skills that go with it. So
						far, I have learned more about communication skills and working
						under a tight schedule and pressure which equipped me with the soft
						skills required to work with others and makes me a good asset to the
						company, also done numerous projects like Blog App, Awesome books,
						TV-Shows, and Doctor's appointment reservation projects with
						JavaScript, HTML, CSS, React, and Ruby on Rails in the program,
						which I have successfully completed and were approved. I plan to
						combine this experience working with other students around the globe
						at Microverse with the knowledge that I have gained in the program
						as a Full-stack developer able to work with either Front-end or
						Back-end or both, to contribute to the field of software
						development. I love to do something that's challenging for myself,
						and just to see the success, makes me go harder and harder the next
						time. I motivate myself by the desire to win more. If you'd like to
						get in touch about potential job opportunities, please reach out!
						feel free to connect if you'd like to chat.
					</p>

					<a href='#contact' className='btn btn-primary'>
						Let's talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
