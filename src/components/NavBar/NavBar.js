import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({children}) => {
	return (
		<div>
			<ul>
				<li><span>Dante Rivas</span></li>
				<li>About</li>
				<li>Experience</li>
				<li>Achievements</li>
				<li>Publications</li>
				<li>Blog</li>
				<li>Contact</li>
			</ul>
			{children}
		</div>
	);
};

NavBar.propTypes = {
	
};

export default NavBar;