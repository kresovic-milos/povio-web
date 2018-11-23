import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import createRootReducer from './reducers';
import sagas from './sagas';

import initialState from './initialState';

const history = createBrowserHistory();

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const router = routerMiddleware(history);
  const middleWares = [logger, sagaMiddleware, router];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      })
    : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middleWares));

  const store = createStore(createRootReducer(history), initialState, enhancer);

  sagaMiddleware.run(sagas);

  if (module.hot)
    module.hot.accept('./reducers', () => store.replaceReducer(createRootReducer(history)));

  return store;
};

export default { store: configureStore(), history };
