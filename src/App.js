import { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import Header from './components/Header';

// redux stuff
import { requestRobots } from './actions/actions';

// Css stuff
import 'tachyons';
import './app.css';

// destructure props instead of props.isPending
const App = ({ isPending, requestRobots }) => {
	useEffect(() => {
		requestRobots();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='tc'>
			<Header />
			<SearchBox />
			<Scroll>{isPending ? <h1>LOADING</h1> : <CardList />}</Scroll>
		</div>
	);
};

// state from the store
const mapStateToProps = state => ({
	isPending: state.robot.isPending,
	error: state.robot.error,
});

// to connect react / redux (state, actions)
export default connect(mapStateToProps, { requestRobots })(App);
