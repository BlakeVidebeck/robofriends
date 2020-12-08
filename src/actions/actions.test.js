import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_FAILED,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
} from './types';
import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

describe('setSearchField', () => {
	const mockStore = configureMockStore([thunkMiddleware]);

	// deals with the action that doesnt return the dispatch and then
	// return the function ( setSearchField = text => {} )
	it('should create an action to search robots', () => {
		const text = 'wooo';
		const expectedAction = {
			type: CHANGE_SEARCH_FIELD,
			payload: text,
		};
		expect(actions.setSearchField(text)).toEqual(expectedAction);
	});

	// deals with the action ( requestRobots => () => async dispatch => {})
	it('handles requesting robots api', () => {
		// create a fake store with thunk middleware
		const store = mockStore();
		store.dispatch(actions.requestRobots());
		const action = store.getActions();

		const expectedAction = {
			type: REQUEST_ROBOTS_PENDING,
		};
		expect(action[0]).toEqual(expectedAction);
	});

	// it('handles requesting robots success api', () => {
	// 	// create a fake store with thunk middleware
	// 	const store = mockStore();
	// 	store.dispatch(actions.requestRobots());
	// 	const action = store.getActions();
	// 	console.log(action);

	// 	const expectedAction = {
	// 		type: REQUEST_ROBOTS_SUCCESS,
	// 	};
	// 	expect(action[1]).toEqual(expectedAction);
	// });
});
