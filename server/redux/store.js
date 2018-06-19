const { createStore, applyMiddleware, compose } = require('redux');
const sagaMiddleware = require('redux-saga').default();
const rootSaga = require('./sagas');
const reducer = require('./reducers');

const enhancer = compose(applyMiddleware(sagaMiddleware));

module.exports = function() {
  const store = createStore(reducer, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
