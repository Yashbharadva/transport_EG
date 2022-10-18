import { combineReducers } from 'redux';
import contracting from 'Reducers/contracting';
import constants from 'Reducers/constants';
import common from 'Reducers/common';
import authentication from 'Reducers/authentication';
const rootReducer = combineReducers({
  constants,
  contracting,
  common,
  authentication
});

export default rootReducer;
