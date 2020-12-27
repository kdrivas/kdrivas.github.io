import React from 'react';
import NavBar from './../components/NavBar';
import Profile from './../components/Profile';
import Experience from './../components/Experience';
import Achievements from './../components/Achievements';
import Contact from './../components/Contact';

const MainPage = props => {
	return (
			<NavBar>
				<Profile/>
				<Experience/>
				<Publications/>
				<Achievements/>
				<Contact/>
			</NavBar>
	);
};

export default MainPage;