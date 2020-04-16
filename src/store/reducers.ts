import {
  VisualizerState,
  VisualizerActionTypes,
  CHANGE_SELECTED,
  CHANGE_HEADER_BG_COLOR,
  CHANGE_EMPHASIS_COLOR,
  CHANGE_EMPHASIS_COMPLIMENT_COLOR,
  CHANGE_BG_COLOR,
  CHANGE_LOGO_COLOR,
  CHANGE_HX_COLOR,
  CHANGE_TEXT_COLOR,
  CHANGE_LOGO_TEXT,
  CHANGE_HERO_TEXT,
  CHANGE_BODY_TEXT,
  CHANGE_LOGO_FONT,
  CHANGE_HX_FONT,
  CHANGE_TEXT_FONT
} from './types';

const initialState: VisualizerState = {
  selected: null,
  headerBGColor: {
    hex: '#A8FFBD',
    hsl: { h: 134, s: 100, l: 83, a: 1 },
    rgb: { r: 168, g: 255, b: 189, a: 1 }
  },

  emphasisColor: {
    hex: '#720ff3',
    hsl: { h: 266, s: 90, l: 51, a: 1 },
    rgb: { r: 114, g: 15, b: 243, a: 1 }
  },
  emphasisComplimentColor: {
    hex: '#e3ffd8',
    hsl: { h: 103, s: 100, l: 92, a: 1 },
    rgb: { r: 227, g: 255, b: 216, a: 1 }
  },
  bgColor: { hex: '#242323', hsl: { h: 0, s: 1, l: 14, a: 1 }, rgb: { r: 36, g: 35, b: 35, a: 1 } },
  logoColor: { hex: '#000', hsl: { h: 0, s: 0, l: 0, a: 1 }, rgb: { r: 0, g: 0, b: 0, a: 1 } },
  hxColor: { hex: '#9756ec', hsl: { h: 266, s: 80, l: 63, a: 1 }, rgb: { r: 151, g: 86, b: 236, a: 1 } },
  textColor: { hex: '#9756ec', hsl: { h: 266, s: 80, l: 63, a: 1 }, rgb: { r: 151, g: 86, b: 236, a: 1 } },
  logoText: 'App Name',
  heroText: 'Hero Text, Being Heroic',
  bodyText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  logoFont: 'Raleway, sans-serif',
  hxFont: 'Open Sans, sans-serif',
  textFont: 'Open Sans, sans-serif'
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
    case CHANGE_LOGO_COLOR:
      return {
        ...state,
        logoColor: action.payload
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
    case CHANGE_LOGO_TEXT:
      return {
        ...state,
        logoText: action.payload
      };
    case CHANGE_HERO_TEXT:
      return {
        ...state,
        heroText: action.payload
      };
    case CHANGE_BODY_TEXT:
      return {
        ...state,
        bodyText: action.payload
      };
    case CHANGE_LOGO_FONT:
      return {
        ...state,
        logoFont: action.payload
      };
    case CHANGE_HX_FONT:
      return {
        ...state,
        hxFont: action.payload
      };
    case CHANGE_TEXT_FONT:
      return {
        ...state,
        textFont: action.payload
      };

    default:
      return state;
  }
}
