import React, { useState } from 'react';
import './Hamburguer.scss';

const Hamburguer = ({status}) => {
	return (
		<div className="burguer-menu">
			<i className={status}></i>
			<i className={status}></i>
			<i className={status}></i>
		</div>
	);
};

export default Hamburguer;