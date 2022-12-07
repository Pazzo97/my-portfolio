import React from 'react';
import './testimonials.css';
import Roland from '../../assets/Roland.jpeg';
import Mustapha from '../../assets/Mustapha.png';
import Edward from '../../assets/Edward.jpg'
import Olivier from '../../assets/Olivier.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
	{
		avatar: Roland,
		name: 'Roland Ossisa Yuma',
		review:
			'I worked with many software developers but Patrick was one of the best. His commitment and good technical and communication skills kept me motivated and focused during stressful times. His ability to work with different people worldwide was beneficial during meetings as he could handle conflicts professionally. I can tell of him as someone reliable and professional. Patrick would be a lucky addition to any team, and I recommend him to anybody or any company looking for an excellent Software Engineer.',
	},

	{
		avatar: Mustapha,
		name: 'Mostefa Terbeche',
		review:
			'Patrick is probably the most punctual developer I\'ve ever worked with, we were part of the same team working remotely on a web project and he was the most motivated member of the team, Always showing in time and facilitating communication between other members. He also has decent problem-solving skills and a good mastery of web development technologies in both front and back end sides. His determination, kindness, and flexibility will definitely make him a good team member. I highly recommend him.',
	},
	{
		avatar: Olivier,
		name: 'Olivier RWUBAKWANAYO',
		review:
			'It was a pleasure working and collaborating with Patrick on a daily basis at Microverse for a whole week we helped each other with the tasks and challenges we had to solve in the program. In a group full of great talent and skills, Patrick stood out as one of the best among us. Do not hesitate for a single second to hire him! Did I mention that his people skills are top-notch?',
	},
	{
		avatar: Edward,
		name: 'Edward Odhiambo',
		review:
			'Patrick is a great coding partner. Worked with him on several projects. He really listens to other members opinion and easy to work with.',
	},
];

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from colleagues</h5>
			<h2>Recommendation</h2>
			<Swiper
				className='container testimonials__container'
				// install Swiper modules
				modules={[ Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
        >

				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className='testimonial'>
							<div className='client__avatar'>
								<img src={avatar} alt={name} />
							</div>
							<h5 className='client__name'>{name}</h5>
							<small className='client__review'>{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
