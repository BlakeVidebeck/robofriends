import { CHANGE_SEARCH_FIELD } from '../actions/types';
import searchRobots from './search';

describe('searchRobots', () => {
	const initialState = {
		searchField: '',
	};

	it('Should return the initial state', () => {
		expect(searchRobots(undefined, {})).toEqual({ searchField: '' });
	});

	it('should handle CHANGE_SEARCH_FIELD', () => {
		expect(
			searchRobots(initialState, {
				type: CHANGE_SEARCH_FIELD,
				payload: 'abc',
			}),
		).toEqual({
			searchField: 'abc',
		});
	});
});
