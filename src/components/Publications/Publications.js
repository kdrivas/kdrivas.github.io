import React from 'react';
import PropTypes from 'prop-types';

const Publications = props => {
	return (
		<div>
			<div>Publications</div>
			<ul>
				<li><a href="https://www.aclweb.org/anthology/W19-4010.pdf">Assessing back-translation as a corpus generation strategy for non-English tasks: A study in reading comprehension and word sense disambiguation</a></li>
				<li><a href="https://arxiv.org/abs/2005.02473">Efficient strategies for hierarchical text classification: External knowledge and auxiliary tasks</a></li>
				<li><a href="https://www.aclweb.org/anthology/W19-6804.pdf">A Continuous Improvement Framework of Machine Translation for Shipibo-Konibo</a></li>
				<li><a href="https://arxiv.org/abs/2010.12881">Revisiting Neural Language Modelling with Syllables</a></li>
			</ul>
		</div>
	);
};

Publications.propTypes = {
	
};

export default Publications;