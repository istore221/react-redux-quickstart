import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import common from './reducers/common';
import blog from './reducers/blog';

export default combineReducers({
  common,
  blog,
  router: routerReducer
});
