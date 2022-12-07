import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
	return (
		<section id='services'>
			<h5>What I offer</h5>
			<h2>Services</h2>
			<div className='container services__container'>
				<article className='service'>
					<div className='service__head'>
						<h3>Web Development</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Write well designed, testable, efficient code by using best
								software development practices.
							</p>
						</li>

						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Create website layout/user interface by using standard HTML/CSS
								practices.
							</p>
						</li>

						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Integrate data from various back-end services and databases.
							</p>
						</li>

						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Gather and refine specifications and requirements based on
								technical needs.
							</p>
						</li>

						<li>
							<BiCheck className='service__list-icon' />
							<p>Create and maintain software documentation.</p>
						</li>

						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Be responsible for maintaining, expanding, and scaling site.
							</p>
						</li>

						<li>
							<BiCheck className='service__list-icon' />
							<p>
								Stay plugged into emerging technologies/industry trends and
								apply them into operations and activities.
							</p>
						</li>

						<li>
							<BiCheck className='service__list-icon' />
							<p>Cooperate with web designers to match visual design intent.</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Services;
