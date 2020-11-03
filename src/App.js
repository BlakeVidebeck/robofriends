import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import 'tachyons';

import './app.css';

const App = () => {
	const [state, setState] = useState({
		robots: [],
		searchfield: ''
	});

	const { robots, searchfield } = state;

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users/')
			.then(res => res.json())
			.then(users => setState({ ...state, robots: users }));
		// eslint-disable-next-line
	}, []);

	const onSearchChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});

	return !robots.length ? (
		<h1>LOADING</h1>
	) : (
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	);
};

export default App;
