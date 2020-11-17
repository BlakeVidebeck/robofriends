import {
	REQUEST_ROBOTS_FAILED,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS
} from '../actions/types';

const initialState = {
	robots: [],
	isPending: false,
	error: ''
};

const requestRobots = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case REQUEST_ROBOTS_PENDING:
			return {
				...state,
				isPending: true
			};
		case REQUEST_ROBOTS_SUCCESS:
			return {
				...state,
				robots: payload,
				isPending: false
			};
		case REQUEST_ROBOTS_FAILED:
			return {
				...state,
				error: payload,
				isPending: false
			};
		default:
			return state;
	}
};

export default requestRobots;
