import React from 'react';

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

export default NavBar;