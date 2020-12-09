import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { setSearchField } from '../actions/actions';


const mapDispatch = {
	OnSearchChange: (e: React.SyntheticEvent<HTMLInputElement>) => setSearchField(e.currentTarget.value)
}

const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const SearchBox = ({ OnSearchChange }: Props) => {
	return (
		<div className='pa2'>
			<input
				aria-label='Search Robots'
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search robots'
				onChange={OnSearchChange}
				name='searchfield'
			/>
		</div>
	);
};


export default connector(SearchBox);
