import { combineReducers } from 'redux';

/**
 * @param {Object} - key/value of reducer functions
 */
const createReducer = (asyncReducers: any = undefined) =>
  combineReducers({
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers,
  });

export default createReducer;
