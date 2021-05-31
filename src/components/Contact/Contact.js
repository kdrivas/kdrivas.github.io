import React from 'react';
import './Contact.js';

const Contact = props => {
	return (
		<div id="section-contact">
			<div className="title">Contact</div>
			<ul>
				<li>Linkedin</li>
				<li>Google Scholar</li>
				<li>Twitter</li>
			</ul>
			<form>
				<div>
					<label for="fname">Name:</label>
					<input type="text" name="firstname"/>
					<label>Email:</label>
					<input type="text" name="email"/>
				</div>
				<input type="text" name="message"/>
				<input type="submit" value="Submit"/>
			</form>

		</div>
	);
};

export default Contact;