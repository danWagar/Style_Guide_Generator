import { createStore, applyMiddleware } from 'redux';
import { vizualizerReducer } from './reducers';

const store = createStore(vizualizerReducer);

export default store;
