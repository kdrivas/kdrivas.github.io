import React from 'react';
import './Button.css';

const Button = ({children, buttonStyle, buttonSize, onClick}) => {
	return (
		<button className="btn" onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;