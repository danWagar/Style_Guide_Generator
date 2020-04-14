import {
  VisualizerState,
  VisualizerActionTypes,
  CHANGE_SELECTED,
  CHANGE_HEADER_BG_COLOR,
  CHANGE_EMPHASIS_COLOR,
  CHANGE_EMPHASIS_COMPLIMENT_COLOR,
  CHANGE_BG_COLOR,
  CHANGE_HX_COLOR,
  CHANGE_TEXT_COLOR,
  CHANGE_LOGO_TEXT,
  CHANGE_HERO_TEXT,
  CHANGE_BODY_TEXT,
  CHANGE_LOGO_FONT,
  CHANGE_HERO_FONT,
  CHANGE_BODY_FONT
} from './types';

const initialState: VisualizerState = {
  selected: null,
  headerBGColor: '#A8FFBD',
  emphasisColor: '#720ff3',
  emphasisComplimentColor: '#e3ffd8',
  bgColor: '#242323',
  hxColor: '#9756ec',
  textColor: '#9756ec',
  logoText: 'App Name',
  heroText: 'Hero Text, Being Heroic',
  bodyText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  logoFont: 'Raleway, sans-serif',
  heroFont: 'Open Sans, sans-serif',
  bodyFont: 'Open Sans, sans-serif'
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
    case CHANGE_HERO_FONT:
      return {
        ...state,
        heroFont: action.payload
      };
    case CHANGE_BODY_FONT:
      return {
        ...state,
        bodyFont: action.payload
      };

    default:
      return state;
  }
}
