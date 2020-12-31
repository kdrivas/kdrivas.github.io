import React from 'react';
import NavBar from './../components/NavBar';
import Profile from './../components/Profile';
import About from './../components/About';
import Experience from './../components/Experience';
import Publications from './../components/Publications';
import Achievements from './../components/Achievements';
import Contact from './../components/Contact';

const MainPage = props => {
	return (
			<NavBar>
				<Profile/>
				<About/>
				<Experience/>
				<Publications/>
				<Achievements/>
				<Contact/>
			</NavBar>
	);
};

export default MainPage;