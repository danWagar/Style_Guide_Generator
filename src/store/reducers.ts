import { VisualizerState, VisualizerActionTypes, CHANGE_HEADER_BG_COLOR } from './types';

const initialState: VisualizerState = {
  headerBGColor: '#A8FFBD'
};

export function vizualizerReducer(state = initialState, action: VisualizerActionTypes): VisualizerState {
  switch (action.type) {
    case CHANGE_HEADER_BG_COLOR:
      return {
        headerBGColor: action.payload
      };
    default:
      return state;
  }
}
