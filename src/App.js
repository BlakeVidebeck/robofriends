import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';

// redux stuff
import { requestRobots } from './actions/actions';

// Css stuff
import 'tachyons';
import './App.css';

// import components when they are needed rather than all at once
const Header = React.lazy(() => import('./components/Header'));
const SearchBox = React.lazy(() => import('./components/SearchBox'));
const Scroll = React.lazy(() => import('./components/Scroll'));
const CardList = React.lazy(() => import('./components/CardList'));

// destructure props instead of props.isPending
const App = ({ isPending, onRequestRobots }) => {
	useEffect(() => {
		onRequestRobots();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='tc'>
			<Suspense fallback={<div>Loading...</div>}>
				<Header />
				<SearchBox />
				<Scroll>{isPending ? <h1>LOADING</h1> : <CardList />}</Scroll>
			</Suspense>
		</div>
	);
};

// state from the store
const mapStateToProps = state => ({
	isPending: state.robot.isPending,
	error: state.robot.error,
});

const mapDispatchToProps = dispatch => {
	return {
		onRequestRobots: () => dispatch(requestRobots()),
	};
};

// to connect react / redux (state, actions)
export default connect(mapStateToProps, mapDispatchToProps)(App);
