import React from 'react';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';

const MainPage = props => {
	return (
		<NavBar>
			<div>
				HomePage
			</div>
			<Profile></Profile>
			
		</NavBar>
	);
};

export default MainPage;