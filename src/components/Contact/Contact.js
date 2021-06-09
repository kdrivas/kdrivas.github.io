import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Contact.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: '2.5%',
    width: '45%',
  },
	button: {
		justifyContent: 'center',
		textAlign: 'center'
	}
}));

const Contact = props => {
	const classes = useStyles();

	return (
		<div>
			<a id="contact"/>
			<div id="section-contact">
				<div className="title">Contact</div>
				<ul className="social-container">
					<li>Linkedin</li>
					<li>Google Scholar</li>
					<li>Github</li>
					<li>Twitter</li>
				</ul>

				<div className="form-container">
					<form name="gform" id="gform" enctype="text/plain"  action="https://docs.google.com/forms/d/e/1FAIpQLSdkTL3nPoHdnImX2VLz60P5aR2l7pdplvx7jF5vCT8E1CTJEA/formResponse?"  target="hidden_iframe" onsubmit="submitted=true">
						<div className="data-container">
							<TextField 
								name="entry.1263638782" 
								id="entry.1263638782" 
								variant="filled" 
								label="Name" 
								inputProps={{min: 0, style: { textAlign: 'center' }}} 
								className={classes.margin}/>
							<TextField 
								name="entry.1072577155" 
								id="entry.1072577155" 
								variant="filled" 
								label="Email" 
								inputProps={{min: 0, style: { textAlign: 'center' }}} 
								className={classes.margin}/>
						</div>
						<div className="message-container">
							<TextField
								id="entry.1255610890"
								name="entry.1255610890"
								label="Message"
								multiline
								rows={4}
								variant="filled"
								fullWidth

							/>
						</div>
						<div>
							<Grid
								container
								spacing={0}
								direction="column"
								alignItems="center"
								justify="center"
							>
								<Button 
									variant="contained" 
									type="submit" 
									value="Submit" 
									color="primary" 
									classes={classes.button}>
									Submit
								</Button>
							</Grid>
						</div>
					</form>
					<iframe name="hidden_iframe" id="hidden_iframe" onload="if(submitted) {}" className="frame"></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;