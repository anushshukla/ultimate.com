import { combineReducers } from 'redux';
import session from './session';

/**
 * @param {Object} - key/value of reducer functions
 */
const createReducer = (asyncReducers: any = undefined) =>
  combineReducers({
    session,
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers,
  });

export default createReducer;
