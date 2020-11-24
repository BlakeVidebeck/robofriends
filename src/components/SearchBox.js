import React from 'react';
import { connect } from 'react-redux';
import { setSearchField } from '../actions/actions';

const SearchBox = ({ setSearchField }) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search robots'
				onChange={e => setSearchField(e.target.value)}
				name='searchfield'
			/>
		</div>
	);
};

export default connect(null, { setSearchField })(SearchBox);
