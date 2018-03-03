// Import necessary libraries
import { combineReducers } from 'redux';

// Import reducers
import { tracks } from './tracks';
import { authorizationReducer } from '../pages/Authorization/reducers'

// Combine all reducers
export default combineReducers({
    tracks,
    authorizationReducer
});
