import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_FAILED,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
} from './types';
import axios from 'axios';

export const setSearchField = text => dispatch => {
	dispatch({
		type: CHANGE_SEARCH_FIELD,
		payload: text,
	});
};

// get robots and dispatch response
export const requestRobots = () => async dispatch => {
	try {
		dispatch({
			type: REQUEST_ROBOTS_PENDING,
		});

		const res = await axios.get('https://jsonplaceholder.typicode.com/users/');
		const data = res.data;

		dispatch({
			type: REQUEST_ROBOTS_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: REQUEST_ROBOTS_FAILED,
			payload: err,
		});
	}
};
