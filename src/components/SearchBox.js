import React from 'react'
import { connect } from 'react-redux'
import { setSearchField } from '../actions/actions'

const SearchBox = ({ onSearchChange }) => {
	return (
		<div className='pa2'>
			<input
				aria-label='Search Robots'
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search robots'
				onChange={onSearchChange}
				name='searchfield'
			/>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
	}
}

export default connect(null, mapDispatchToProps)(SearchBox)
