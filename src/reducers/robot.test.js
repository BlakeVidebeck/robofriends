import {
	REQUEST_ROBOTS_FAILED,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
} from '../actions/types';
import requestRobots from './robot';

describe('requestRobots', () => {
	// for reducers test you need to have an initial state
	// which is the same as the state in the real reducer
	const initialStateRobots = {
		robots: [],
		isPending: false,
		error: '',
	};

	it('Should return the initial state', () => {
		expect(requestRobots(undefined, {})).toEqual(initialStateRobots);
	});

	it('should handle REQUEST_ROBOTS_PENDING action', () => {
		expect(
			requestRobots(initialStateRobots, {
				type: REQUEST_ROBOTS_PENDING,
			}),
		).toEqual({
			robots: [],
			isPending: true,
			error: '',
		});
	});

	it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
		expect(
			requestRobots(initialStateRobots, {
				type: REQUEST_ROBOTS_SUCCESS,
				payload: [
					{
						id: '123',
						name: 'test',
						email: 'test@gmail.com',
					},
				],
			}),
		).toEqual({
			robots: [
				{
					id: '123',
					name: 'test',
					email: 'test@gmail.com',
				},
			],
			isPending: false,
			error: '',
		});
	});

	it('should handle REQUEST_ROBOTS_FAILED action', () => {
		expect(
			requestRobots(initialStateRobots, {
				type: REQUEST_ROBOTS_FAILED,
				payload: 'NOOOOOO',
			}),
		).toEqual({
			robots: [],
			isPending: false,
			error: 'NOOOOOO',
		});
	});
});
