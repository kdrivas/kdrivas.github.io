import React from 'react';
import './Experience.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const WORKS = [
	{jobRole: 'Research Assistant', dateRange: 'November 2016 - April 2018', company: 'IAPUCP', activities: 
		['I developed a neural machine translation algorithm using a seq2seq architecture',
		'I used Transfer Learning and sub-word units to improve the results in a low-resource language.',
		'I participated in the organizing committee of the Iberoamerican Congress on Pattern Recognition (CIARP 2016)',
		'I participated as a teacher assistant and project advisor in an artificial intelligence course taught by the research group (Winter School IA 2018).']}, 
		{jobRole: 'Data Assistant', dateRange: 'August 2018 - January 2019', company: 'BCP', activities: ['I developed a clustering algorithm for customer segmentation.',
		'I used Web scraping using Selenium and Scrapy to collect product information.',
			'I made a recomendation algorithm to find similar products using their descriptions.']},
		{jobRole: 'Data Scientist', dateRange: 'February 2019 - April 2019', company: 'HACKSPACE', activities: ['The objective of the project was the construction of a model to reduce the data annotation workload of the products.',
		'I built a seq2seq architecture to classify the product descriptions.',
		'I carried out the preprocessing of the texts to obtain an improvement in the model results.',
		'I developed an active learning module for model retraining.',
		'I developed an API to obtain the prioritized samples by the active learning module using Flask, Nginx, and Gunicorn.']},  
	{jobRole: 'Data Scientist', dateRange: 'October  2019 - Present', company: 'RIMAC', activities: ['I used a tree-based model to classify a customer"s churn risk.', 
	'I served the model using Lambda, DynamoDB, and Redshift.',
	'I developed a death risk model for the prevention of ICU hospitalizations due to Covid.',
	'I used MLFlow, a model registry, and Sagemaker jobs, to automate the data flow pipelines and model deployment.',
	'I developed an ambulance optimization module and make it available via pip and use Travis CI for continuous integration tests']}, 
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const useStylesVertical = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
		height: 350,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
		minWidth: '30%',
		fontSize: 120,
  },
}));

const useStylesHorizontal = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
		width: '100%'
  },
}));

const VerticalTab = ({classes, handleChange, value}) => {
	return (<Tabs
		orientation="vertical"
		variant="scrollable"
		value={value}
		onChange={handleChange}
		className={classes.tabs}
		>
	  {WORKS.map((work, index) => <Tab label={work.company} key={index} {...a11yProps(index)}/>)}
	</Tabs>);
}

const HorizontalTab = ({classes, handleChange, value}) => {
	return (
	<AppBar position="static" color="default">
		<Tabs
			orientation="horizontal"
			variant="scrollable"
			value={value}
			onChange={handleChange}
		>
			{WORKS.map((work, index) => <Tab label={work.company} key={index} {...a11yProps(index)}/>)}
		</Tabs>
	</AppBar>);
}

const Experience = props => {
  const classesVertical = useStylesVertical();
  const classesHorizontal = useStylesHorizontal();
  const [value, setValue] = React.useState(0);
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
	return (
		<div className="exp-container">
			<a id="experience"/>
			<div id='section-exp'> 
				<div className='title'>Experience</div>
				<div>
					<div className={matches ? classesVertical.root : classesHorizontal.root}>
						{matches ? <VerticalTab classes={classesVertical} handleChange={handleChange} value={value}/> : <HorizontalTab classes={classesHorizontal} handleChange={handleChange} value={value}/>}
						{WORKS.map((work, index1) => 
							(<TabPanel value={value} index={index1}> 
								<div className="job-role">{work.jobRole}</div>
								<div className="date-range">{work.dateRange}</div>
								<ul className="activities">
									{work.activities.map((activity, index2) => <li key={index2}>{activity}</li>)}
								</ul>
							</TabPanel>))
						}
					</div>
				</div>
			</div>
		</div>
	);
};

Experience.propTypes = {
	
};

export default Experience;