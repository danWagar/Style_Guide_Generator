//Reducers
interface HSLColor {
  a?: number;
  h: number;
  l: number;
  s: number;
}

interface RGBColor {
  a?: number;
  b: number;
  g: number;
  r: number;
}

interface ColorResult {
  hex: string;
  hsl: HSLColor;
  rgb: RGBColor;
}

export interface VisualizerState {
  selected?: string | null | undefined;
  headerBGColor?: ColorResult;
  emphasisColor?: ColorResult;
  emphasisComplimentColor?: ColorResult;
  bgColor?: ColorResult;
  logoColor?: ColorResult;
  hxColor?: ColorResult;
  textColor?: ColorResult;
  logoText?: string;
  heroText?: string;
  bodyText?: string;
  logoFont?: string;
  hxFont?: string;
  textFont?: string;
}

//Actions
export const CHANGE_SELECTED = 'CHANGE_SELECTED';
interface ChangeSelected {
  type: typeof CHANGE_SELECTED;
  payload: string | undefined | null;
}

export const CHANGE_HEADER_BG_COLOR = 'CHANGE_HEADER_BG_COLOR';
interface ChangeHeaderBGColorAction {
  type: typeof CHANGE_HEADER_BG_COLOR;
  payload: ColorResult;
}

export const CHANGE_EMPHASIS_COLOR = 'CHANGE_EMPHASIS_COLOR';
interface ChangeEmphasisColorAction {
  type: typeof CHANGE_EMPHASIS_COLOR;
  payload: ColorResult;
}

export const CHANGE_EMPHASIS_COMPLIMENT_COLOR = 'CHANGE_EMPHASIS_COMPLIMENT_COLOR';
interface ChangeEmphasisComplimentColorAction {
  type: typeof CHANGE_EMPHASIS_COMPLIMENT_COLOR;
  payload: ColorResult;
}

export const CHANGE_BG_COLOR = 'CHANGE_BG_COLOR';
interface ChangeBGColor {
  type: typeof CHANGE_BG_COLOR;
  payload: ColorResult;
}

export const CHANGE_LOGO_COLOR = 'CHANGE_LOGO_COLOR';
interface ChangeLogoColor {
  type: typeof CHANGE_LOGO_COLOR;
  payload: ColorResult;
}

export const CHANGE_HX_COLOR = 'CHANGE_HX_COLOR';
interface ChangeHxColor {
  type: typeof CHANGE_HX_COLOR;
  payload: ColorResult;
}

export const CHANGE_TEXT_COLOR = 'CHANGE_TEXT_COLOR';
interface ChangeTextColor {
  type: typeof CHANGE_TEXT_COLOR;
  payload: ColorResult;
}

export const CHANGE_LOGO_TEXT = 'CHANGE_LOGO_TEXT';
interface ChangeLogoText {
  type: typeof CHANGE_LOGO_TEXT;
  payload: string;
}

export const CHANGE_HERO_TEXT = 'CHANGE_HERO_TEXT';
interface ChangeHeroText {
  type: typeof CHANGE_HERO_TEXT;
  payload: string;
}

export const CHANGE_BODY_TEXT = 'CHANGE_BODY_TEXT';
interface ChangeBodyText {
  type: typeof CHANGE_BODY_TEXT;
  payload: string;
}

export const CHANGE_LOGO_FONT = 'CHANGE_LOGO_FONT';
interface ChangeLogoFont {
  type: typeof CHANGE_LOGO_FONT;
  payload: string;
}

export const CHANGE_HX_FONT = 'CHANGE_HX_FONT';
interface ChangeHeroFont {
  type: typeof CHANGE_HX_FONT;
  payload: string;
}

export const CHANGE_TEXT_FONT = 'CHANGE_TEXT_FONT';
interface ChangeBodyFont {
  type: typeof CHANGE_TEXT_FONT;
  payload: string;
}

export type VisualizerActionTypes =
  | ChangeSelected
  | ChangeHeaderBGColorAction
  | ChangeEmphasisColorAction
  | ChangeEmphasisComplimentColorAction
  | ChangeBGColor
  | ChangeLogoColor
  | ChangeHxColor
  | ChangeTextColor
  | ChangeLogoText
  | ChangeHeroText
  | ChangeBodyText
  | ChangeLogoFont
  | ChangeHeroFont
  | ChangeBodyFont;

//
