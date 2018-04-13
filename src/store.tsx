import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';
import logMiddleware from './middlewares/logMiddleware';
import multiMiddleware from './middlewares/multiMiddleware';
import youTubeSearchMiddleware from './middlewares/youTubeSearchMiddleware';

const initState = {};
const middleware = [
  logMiddleware,
  multiMiddleware,
  youTubeSearchMiddleware
];

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(
  applyMiddleware(...middleware),
));

export default store;