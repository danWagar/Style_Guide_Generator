import {
  CHANGE_HEADER_BG_COLOR,
  VisualizerActionTypes,
  CHANGE_EMPHASIS_COLOR,
  CHANGE_EMPHASIS_COMPLIMENT_COLOR,
  CHANGE_SELECTED
} from './types';

export function changeSelected(newSelected: string): VisualizerActionTypes {
  return {
    type: CHANGE_SELECTED,
    payload: newSelected
  };
}

export function changeHeaderBGColor(newColor: string): VisualizerActionTypes {
  return {
    type: CHANGE_HEADER_BG_COLOR,
    payload: newColor
  };
}

export function changeEmphasisColor(newColor: string): VisualizerActionTypes {
  return {
    type: CHANGE_EMPHASIS_COLOR,
    payload: newColor
  };
}

export function changeEmphasisComplimentColor(newColor: string): VisualizerActionTypes {
  return {
    type: CHANGE_EMPHASIS_COMPLIMENT_COLOR,
    payload: newColor
  };
}
