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
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem aliquam eius iusto ad modi blanditiis, harum ex optio ab minima ullam velit earum dicta voluptate ea est pariatur veniam!',
	},

	{
		avatar: Mustapha,
		name: 'Mostefa Terbeche',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem aliquam eius iusto ad modi blanditiis, harum ex optio ab minima ullam velit earum dicta voluptate ea est pariatur veniam!',
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
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem aliquam eius iusto ad modi blanditiis, harum ex optio ab minima ullam velit earum dicta voluptate ea est pariatur veniam!',
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
