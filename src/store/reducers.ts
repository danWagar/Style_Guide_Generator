import {
  VisualizerState,
  VisualizerActionTypes,
  CHANGE_SELECTED,
  CHANGE_HEADER_BG_COLOR,
  CHANGE_EMPHASIS_COLOR,
  CHANGE_EMPHASIS_COMPLIMENT_COLOR,
  CHANGE_BG_COLOR,
  CHANGE_HX_COLOR,
  CHANGE_TEXT_COLOR
} from './types';
import { changeEmphasisComplimentColor } from './action';

const initialState: VisualizerState = {
  selected: null,
  headerBGColor: '#A8FFBD',
  emphasisColor: '#720ff3',
  emphasisComplimentColor: '#e3ffd8',
  bgColor: '#242323',
  hxColor: '#9756ec',
  textColor: '#9756ec'
};

export function vizualizerReducer(state = initialState, action: VisualizerActionTypes): VisualizerState {
  switch (action.type) {
    case CHANGE_SELECTED:
      return {
        ...state,
        selected: action.payload
      };
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
    case CHANGE_BG_COLOR:
      return {
        ...state,
        bgColor: action.payload
      };
    case CHANGE_HX_COLOR:
      return {
        ...state,
        hxColor: action.payload
      };
    case CHANGE_TEXT_COLOR:
      return {
        ...state,
        textColor: action.payload
      };

    default:
      return state;
  }
}
