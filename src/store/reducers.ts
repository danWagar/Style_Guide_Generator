import {
  VisualizerState,
  VisualizerActionTypes,
  CHANGE_HEADER_BG_COLOR,
  CHANGE_EMPHASIS_COLOR,
  CHANGE_EMPHASIS_COMPLIMENT_COLOR
} from './types';
import { changeEmphasisComplimentColor } from './action';

const initialState: VisualizerState = {
  headerBGColor: '#A8FFBD',
  emphasisColor: '#720ff3',
  emphasisComplimentColor: '#e3ffd8'
};

export function vizualizerReducer(state = initialState, action: VisualizerActionTypes): VisualizerState {
  switch (action.type) {
    case CHANGE_HEADER_BG_COLOR:
      return {
        ...state,
        headerBGColor: action.payload
      };
    case CHANGE_EMPHASIS_COLOR:
      return {
        ...state,
        emphasisColor: action.payload
      };
    case CHANGE_EMPHASIS_COMPLIMENT_COLOR:
      return {
        ...state,
        emphasisComplimentColor: action.payload
      };
    default:
      return state;
  }
}
