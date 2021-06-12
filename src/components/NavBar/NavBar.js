import React, {useState, useEffect, useRef} from 'react';
import { MenuItems } from './../../constants/NavBar';
import Button from './../Button';
import Hamburguer from './Hamburguer';
import './NavBar.css';
import {
	  Route,
	  NavLink,
	} from "react-router-dom";

const handleClick = (setClicked, clicked) => {
	setClicked(! clicked);
}

const NavBar = ({children}) => {

	const [clicked, setClicked] = useState(false);
	const [showNav, setShowNav] = useState(true);
	const [scroll, setScroll] = useState(document.body.scrollTop);
	const innerRef = useRef(null);

	//useEffect(() => {
	//	const div = innerRef.current;
	//	window.addEventListener("scroll", handleScroll);

	//	return (() => {
	//		window.removeEventListener("scroll", handleScroll);
	//	});
	//}, [scroll])

	const handleScroll = (e) => {
		// setScroll(document.body.getBoundingClientRect().top);
		// setShowNav(document.body.getBoundingClientRect().top > scroll);
	}

	return (
		<div>
			<nav className={showNav ? "NavItems active-nav" : "NavItems hidden-nav"}>
				<div className="menu-icon" onClick={event => handleClick(setClicked, clicked)}>
					<Hamburguer status={clicked ? "open" : "close"}></Hamburguer>
				</div>
				<ul className={clicked ? "nav-menu active" : "nav-menu"}>
					{
						MenuItems.map((item, index) => {
							return <li key={index}>
								<a className={item.cName} href={item.url}>{item.text}</a>
							</li>
						})
					}
				</ul>
				<div className="navbar-button">
					<Button className="btn">
						My Resume
					</Button>
				</div>
			</nav>
			<div className={clicked ? "blur active" : "blur"}>
				{children}
			</div>
		</div>
	);
};

export default NavBar;