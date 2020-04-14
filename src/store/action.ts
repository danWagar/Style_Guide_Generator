import {
  CHANGE_HEADER_BG_COLOR,
  VisualizerActionTypes,
  CHANGE_EMPHASIS_COLOR,
  CHANGE_EMPHASIS_COMPLIMENT_COLOR,
  CHANGE_SELECTED,
  CHANGE_BG_COLOR,
  CHANGE_LOGO_COLOR,
  CHANGE_HX_COLOR,
  CHANGE_TEXT_COLOR,
  CHANGE_LOGO_TEXT,
  CHANGE_HERO_TEXT,
  CHANGE_BODY_TEXT,
  CHANGE_HX_FONT,
  CHANGE_LOGO_FONT,
  CHANGE_TEXT_FONT
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

export function changeLogoColor(newColor: string): VisualizerActionTypes {
  return {
    type: CHANGE_LOGO_COLOR,
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

export function changeLogoText(newStr: string): VisualizerActionTypes {
  return {
    type: CHANGE_LOGO_TEXT,
    payload: newStr
  };
}

export function changeHeroText(newStr: string): VisualizerActionTypes {
  return {
    type: CHANGE_HERO_TEXT,
    payload: newStr
  };
}

export function changeBodyText(newStr: string): VisualizerActionTypes {
  return {
    type: CHANGE_BODY_TEXT,
    payload: newStr
  };
}

export function changeLogoFont(newStr: string): VisualizerActionTypes {
  return {
    type: CHANGE_LOGO_FONT,
    payload: newStr
  };
}

export function changeHxFont(newStr: string): VisualizerActionTypes {
  return {
    type: CHANGE_HX_FONT,
    payload: newStr
  };
}

export function changeTextFont(newStr: string): VisualizerActionTypes {
  return {
    type: CHANGE_TEXT_FONT,
    payload: newStr
  };
}
