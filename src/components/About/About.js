import React from 'react';
import PropTypes from 'prop-types';
import './About.css';

const About = props => {
	return (
		<div>
			<a id="about"/>
			<div id="section-about">
				<div className="title"> About Me</div>
				<div>
					<div className="description">
						<p>
							Hello, I'm Dante, nice to meet you!. I'm a data scientist with 2 years of experience, I enjoy building and deploying machine learning models. My goal is to construct clear and efficient architectures in production. Also, in my free time I like learning front-end technologies.
						</p>
						<p>
							After graduating from PUCP, I've been working in an insurance company called Rimac where I learned about data engineering and deployment tools.
						</p>
					</div>
					<div className="skills">
						<div>
							<div>Python</div>
							<div className="progress-bar">
								<div className="progress-bar val-100"></div>
							</div>
						</div>
						<div>
							<div>React JS</div>
							<div className="progress-bar">
								<div className="progress-bar val-95"></div>
							</div>
						</div>
						<div>
							<div>Node JS</div>
							<div className="progress-bar">
								<div className="progress-bar val-90"></div>
							</div>
						</div>
						<div>
							<div>Kubernetes</div>
							<div className="progress-bar">
								<div className="progress-bar val-80"></div>
							</div>
						</div>
						<div>
							<div>Docker</div>
							<div className="progress-bar">
								<div className="progress-bar val-90"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

About.propTypes = {
	
};

export default About;