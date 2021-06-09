import React, {useState} from 'react';
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
	return (
		<div>
			<nav className="NavItems">
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