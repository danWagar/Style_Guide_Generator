import {
  CHANGE_HEADER_BG_COLOR,
  VisualizerActionTypes,
  CHANGE_EMPHASIS_COLOR,
  CHANGE_EMPHASIS_COMPLIMENT_COLOR,
  CHANGE_SELECTED,
  CHANGE_BG_COLOR,
  CHANGE_HX_COLOR,
  CHANGE_TEXT_COLOR
} from './types';
import { ViewportZoomProperty } from 'csstype';

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

export function changeBGColor(newColor: string): VisualizerActionTypes {
  return {
    type: CHANGE_BG_COLOR,
    payload: newColor
  };
}

export function changeHxColor(newColor: string): VisualizerActionTypes {
  return {
    type: CHANGE_HX_COLOR,
    payload: newColor
  };
}

export function changeTextColor(newColor: string): VisualizerActionTypes {
  return {
    type: CHANGE_TEXT_COLOR,
    payload: newColor
  };
}
