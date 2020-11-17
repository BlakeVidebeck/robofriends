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
	onSearchChange,
	onRequestRobots,
	robots,
	isPending
}) => {
	useEffect(() => {
		onRequestRobots();
		// eslint-disable-next-line
	}, []);

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

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

// @todo - get rid of this
const mapDispatchToProps = dispatch => ({
	onSearchChange: e => dispatch(setSearchField(e.target.value)),
	onRequestRobots: () => dispatch(requestRobots())
});

// @todo - change connect so it imports the action not mapdispatch
export default connect(mapStateToProps, mapDispatchToProps)(App);
