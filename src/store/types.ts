//Reducers
export interface VisualizerState {
  selected?: string | null | undefined;
  headerBGColor?: string;
  emphasisColor?: string;
  emphasisComplimentColor?: string;
  bgColor?: string;
  hxColor?: string;
  textColor?: string;
  logoText?: string;
  heroText?: string;
  bodyText?: string;
  logoFont?: string;
  heroFont?: string;
  bodyFont?: string;
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
  payload: string;
}

export const CHANGE_EMPHASIS_COLOR = 'CHANGE_EMPHASIS_COLOR';
interface ChangeEmphasisColorAction {
  type: typeof CHANGE_EMPHASIS_COLOR;
  payload: string;
}

export const CHANGE_EMPHASIS_COMPLIMENT_COLOR = 'CHANGE_EMPHASIS_COMPLIMENT_COLOR';
interface ChangeEmphasisComplimentColorAction {
  type: typeof CHANGE_EMPHASIS_COMPLIMENT_COLOR;
  payload: string;
}

export const CHANGE_BG_COLOR = 'CHANGE_BG_COLOR';
interface ChangeBGColor {
  type: typeof CHANGE_BG_COLOR;
  payload: string;
}

export const CHANGE_HX_COLOR = 'CHANGE_HX_COLOR';
interface ChangeHxColor {
  type: typeof CHANGE_HX_COLOR;
  payload: string;
}

export const CHANGE_TEXT_COLOR = 'CHANGE_TEXT_COLOR';
interface ChangeTextColor {
  type: typeof CHANGE_TEXT_COLOR;
  payload: string;
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

export const CHANGE_HERO_FONT = 'CHANGE_HERO_FONT';
interface ChangeHeroFont {
  type: typeof CHANGE_HERO_FONT;
  payload: string;
}

export const CHANGE_BODY_FONT = 'CHANGE_BODY_FONT';
interface ChangeBodyFont {
  type: typeof CHANGE_BODY_FONT;
  payload: string;
}

export type VisualizerActionTypes =
  | ChangeSelected
  | ChangeHeaderBGColorAction
  | ChangeEmphasisColorAction
  | ChangeEmphasisComplimentColorAction
  | ChangeBGColor
  | ChangeHxColor
  | ChangeTextColor
  | ChangeLogoText
  | ChangeHeroText
  | ChangeBodyText
  | ChangeLogoFont
  | ChangeHeroFont
  | ChangeBodyFont;

//
