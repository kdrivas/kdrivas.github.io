import React from 'react';
import PropTypes from 'prop-types';
import './Experience.css';

const Experience = props => {
	return (
		<div id='section-exp'> 
			<div className='title'>Experience</div>
			<div>
				<div>
					Rimac Seguros
				</div>
				<div>
					Hackspace
				</div>
				<div>
					BCP
				</div>
				<div>
					IAPUCP
				</div>
			</div>
		</div>
	);
};

Experience.propTypes = {
	
};

export default Experience;