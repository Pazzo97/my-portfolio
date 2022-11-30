import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Service from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
	return (
		<>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Service />
      <Portfolio/>
			<Testimonials />
			<Contact />
		</>
	);
};

export default App;
