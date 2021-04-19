import React from 'react';
import PropTypes from 'prop-types';

const About = props => {
	return (
		<div>
			<div>About</div>
			<div>
				<div>
					<p>
						Hello, I'm Dante, nice to meet you!. I'm a data scientist with 2 years of experience, I enjoy building and deploying machine learning models. My goal is to construct clear and efficient architectures in production. Also, in my free time I like learning front-end technologies.
					</p>
					<p>
						After graduating from PUCP, I've been working in an insurance company called Rimac where I learned about data engineering and deployment tools.
					</p>
					<p>
						Finaly, here's a list of my skills:
					</p>
				</div>
				<div>
					<div>Python</div>
					<div>React JS</div>
					<div>React Native</div>
					<div>Node</div>
					<div>Pytorch</div>
					<div>MLflow</div>
					<div>Kubernetes</div>
					<div>Luigi</div>
				</div>
			</div>
		</div>
	);
};

About.propTypes = {
	
};

export default About;