import { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

// redux stuff
import { setSearchField, requestRobots } from './actions/actions';

// Css stuff
import 'tachyons';
import './app.css';

// destructure from props (same as props.searchField)
const App = ({
	searchField,
	robots,
	isPending,
	setSearchField,
	requestRobots
}) => {
	useEffect(() => {
		requestRobots();
		// eslint-disable-next-line
	}, []);

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

	const onSearchChange = e => setSearchField(e.target.value);

	return (
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				{isPending ? <h1>LOADING</h1> : <CardList robots={filteredRobots} />}
			</Scroll>
		</div>
	);
};

// state from the reducer
const mapStateToProps = state => ({
	searchField: state.search.searchField,
	robots: state.robot.robots,
	isPending: state.robot.isPending,
	error: state.robot.error
});

// to connect react / redux
export default connect(mapStateToProps, { setSearchField, requestRobots })(App);
