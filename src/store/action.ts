import { CHANGE_HEADER_BG_COLOR, VisualizerActionTypes } from './types';

export function changeHeaderBGColor(newColor: string): VisualizerActionTypes {
  return {
    type: CHANGE_HEADER_BG_COLOR,
    payload: newColor
  };
}
