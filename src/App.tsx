import React, { useEffect, Suspense } from 'react';
import { connect, ConnectedProps } from 'react-redux';

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

interface RootState {
	isPending: boolean
}

const mapState = (state: RootState) => ({
	isPending: state.isPending
})

const mapDispatch = {
	onRequestRobots: () => requestRobots()
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux 

const App = (props: Props) => {
	useEffect(() => {
		props.onRequestRobots();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='tc'>
			<Suspense fallback={<div>Loading...</div>}>
				<Header />
				<SearchBox />
				<Scroll>{props.isPending ? <h1>LOADING</h1> : <CardList />}</Scroll>
			</Suspense>
		</div>
	);
};

export default connector(App);
