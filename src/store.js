import { applyMiddleware, createStore ,dispatch } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise-middleware';
import createHashHistory from 'history/createHashHistory';
import reducer from './reducer';

export const history = createHashHistory();
const myRouterMiddleware = routerMiddleware(history);

const myMiddleware = store => next => action => {
  next(action);
}


const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware,createLogger(),promiseMiddleware());
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware,createLogger(),promiseMiddleware())
  }
};

const store = createStore(
  reducer, composeWithDevTools(getMiddleware()));

export default store
