import React from 'react';
import '../portfolio/portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Crypto Currency Dashboard  & Financial Visualization',
		github: 'https://github.com',
		demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
	},

	{
		id: 2,
		image: IMG2,
		title: 'Crypto currency dashboards and financial data visualization',
		github: 'https://github.com',
		demo: 'https://dribbble.com/shots/16673715',
	},

	{
		id: 3,
		image: IMG3,
		title: 'Crypto Currency Dashboard  & Financial Visualization',
		github: 'https://github.com',
		demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma',
	},

	{
		id: 4,
		image: IMG4,
		title: 'Crypto Currency Dashboard  & Financial Visualization',
		github: 'https://github.com',
		demo: 'https://dribbble.com/shots/19773322-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
	},

	{
		id: 5,
		image: IMG5,
		title: 'Crypto Currency Dashboard  & Financial Visualization',
		github: 'https://github.com',
		demo: 'https://dribbble.com/shots/19886714-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
	},

	{
		id: 6,
		image: IMG6,
		title: 'Crypto Currency Dashboard  & Financial Visualization',
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
