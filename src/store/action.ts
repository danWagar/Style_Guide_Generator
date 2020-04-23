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
  CHANGE_TEXT_FONT,
  CHANGE_TEXT_FONT_SIZE,
  CHANGE_HX_FONT_SIZE,
  CHANGE_LOGO_FONT_SIZE,
  CHANGE_TEXT_FONT_WEIGHT,
  CHANGE_HX_FONT_WEIGHT,
  CHANGE_LOGO_FONT_WEIGHT
} from './types';
import { ColorResult } from 'react-color';

export function changeSelected(newSelected: string): VisualizerActionTypes {
  return {
    type: CHANGE_SELECTED,
    payload: newSelected
  };
}

export function changeHeaderBGColor(newColor: ColorResult): VisualizerActionTypes {
  return {
    type: CHANGE_HEADER_BG_COLOR,
    payload: newColor
  };
}

export function changeEmphasisColor(newColor: ColorResult): VisualizerActionTypes {
  return {
    type: CHANGE_EMPHASIS_COLOR,
    payload: newColor
  };
}

export function changeEmphasisComplimentColor(newColor: ColorResult): VisualizerActionTypes {
  return {
    type: CHANGE_EMPHASIS_COMPLIMENT_COLOR,
    payload: newColor
  };
}

export function changeBGColor(newColor: ColorResult): VisualizerActionTypes {
  return {
    type: CHANGE_BG_COLOR,
    payload: newColor
  };
}

export function changeLogoColor(newColor: ColorResult): VisualizerActionTypes {
  return {
    type: CHANGE_LOGO_COLOR,
    payload: newColor
  };
}

export function changeHxColor(newColor: ColorResult): VisualizerActionTypes {
  return {
    type: CHANGE_HX_COLOR,
    payload: newColor
  };
}

export function changeTextColor(newColor: ColorResult): VisualizerActionTypes {
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

export function changeLogoFontSize(newStr: string): VisualizerActionTypes {
  return {
    type: CHANGE_LOGO_FONT_SIZE,
    payload: newStr
  };
}

export function changeHxFontSize(newStr: string): VisualizerActionTypes {
  return {
    type: CHANGE_HX_FONT_SIZE,
    payload: newStr
  };
}

export function changeTextFontSize(newStr: string): VisualizerActionTypes {
  return {
    type: CHANGE_TEXT_FONT_SIZE,
    payload: newStr
  };
}

export function changeLogoFontWeight(newWeight: number): VisualizerActionTypes {
  return {
    type: CHANGE_LOGO_FONT_WEIGHT,
    payload: newWeight
  };
}

export function changeHxFontWeight(newWeight: number): VisualizerActionTypes {
  return {
    type: CHANGE_HX_FONT_WEIGHT,
    payload: newWeight
  };
}

export function changeTextFontWeight(newWeight: number): VisualizerActionTypes {
  return {
    type: CHANGE_TEXT_FONT_WEIGHT,
    payload: newWeight
  };
}
