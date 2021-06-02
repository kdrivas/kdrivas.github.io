import React from 'react';
import './Contact.css';

const Contact = props => {
	return (
		<div id="section-contact">
			<div className="title">Contact</div>
			<ul className="social-container">
				<li>Linkedin</li>
				<li>Google Scholar</li>
				<li>Github</li>
				<li>Twitter</li>
			</ul>
			<form className="form-container">
				<div className="data-container">
					<label for="fname" className="label">Name: </label>
					<input type="text" name="firstname" className="input"/>
					<label className="label">Email: </label>
					<input type="text" name="email" className="input"/>
				</div>
				<div className="message-container">
					<textarea type="text" name="message" className="message"/>
				</div>
				<div>
					<input type="submit" value="Submit"/>
				</div>
			</form>

		</div>
	);
};

export default Contact;