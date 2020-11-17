import { combineReducers } from 'redux';

import robot from './robot';
import search from './search';

export default combineReducers({
	search,
	robot
});
