import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// TODO epics
// import { createEpicMiddleware } from 'redux-observable';
// import { rootEpic } from './epics';
import reducer from './reducers';

// const epicMiddleware = createEpicMiddleware(rootEpic);

// Redux Dev Tools
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default createStore(reducer, enhancer);