import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import 'tachyons';

import './app.css';

const App = () => {
	// state name, set state, initial state
	const [state, setState] = useState({
		robots: [],
		searchfield: '',
		count: 0
	});

	// destructure from state
	const { robots, searchfield, count } = state;

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users/')
			.then(res => res.json())
			.then(users => setState({ ...state, robots: users }));
		// eslint-disable-next-line
	}, [count]); // only run if count changes

	const onSearchChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});

	const setCount = () => setState({ ...state, count: count + 1 });

	return !robots.length ? (
		<h1>LOADING</h1>
	) : (
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<button onClick={setCount}>Click Me</button>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	);
};

export default App;
