import { vizualizerReducer } from './reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  vizualizer: vizualizerReducer
});

export type RootState = ReturnType<typeof rootReducer>;
