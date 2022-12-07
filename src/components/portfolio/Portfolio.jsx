import React from 'react';
import '../portfolio/portfolio.css';
import IMG6 from '../../assets/portfolio6.jpg';
import Nobilis from '../../assets/Nobilis.png'
import Zoi from '../../assets/Zoi-Store.png'
import Space from '../../assets/space.png'
import TV from '../../assets/TV-Show.png'
import Africa from '../../assets/Africa.png'

const data = [
	{
		id: 1,
		image: Nobilis,
		title: 'Nobilis Summer Bootcamp',
		github: 'https://github.com/Pazzo97/Nobilis-2022-Summer-Bootcamp',
		demo: 'https://pazzo97.github.io/Nobilis-2022-Summer-Bootcamp/',
	},

	{
		id: 2,
		image: Zoi,
		title: 'The Zoi Online Store',
		github: 'https://github.com/Pazzo97/store-app-react-redux',
		demo: 'https://zoi-store.netlify.app/',
	},

	{
		id: 3,
		image: Space,
		title: "The Space Travelers' Hub",
		github: 'https://github.com/Pazzo97/Space-Travelers-Hub',
		demo: 'https://space-travelers-hub01.netlify.app/',
	},

	{
		id: 4,
		image: TV,
		title: 'Under The Dom Season1 ',
		github: 'https://github.com/Pazzo97/TV-Shows',
		demo: 'https://pazzo97.github.io/TV-Shows/',
	},

	{
		id: 5,
		image: Africa,
		title: 'Africa Metrics Data',
		github: 'https://github.com/Pazzo97/metrics-webapp',
		demo: 'https://our-africa.netlify.app/',
	},

	{
		id: 6,
		image: IMG6,
		title: 'The Crystal Budget App',
		github: 'https://github.com',
		demo: 'https://dribbble.com/shots/19838639-Orion-UI-kit-for-Figma',
	},
];

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My recent works</h5>
			<h2>Portfolio</h2>
			<div className='container portfolio__container'>
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className='portfolio__items'>
							<div className='portfolio__items-image'>
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>

							<div className='portfolio__items-cta'>
								<a href={github} className='btn' target='_blank'>
									Github
								</a>
								<a href={demo} className='btn btn-primary' target='_blank'>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
