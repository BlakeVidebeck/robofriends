import { CHANGE_SEARCH_FIELD } from '../actions/types';

const initialState = {
	searchField: ''
};

// searchField reducers
const searchRobots = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case CHANGE_SEARCH_FIELD:
			return {
				...state,
				searchField: payload
			};
		default:
			return state;
	}
};

export default searchRobots;
