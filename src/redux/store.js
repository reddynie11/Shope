import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const myStore = createStore(rootReducer, applyMiddleware(...middlewares));

export default myStore;