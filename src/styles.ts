import { Props } from './reduxInterface';
import { Properties } from 'csstype';
import { ColorResult } from 'react-color';
import { colorResultToRgbaString } from './colorConvert';
import store from './store/store';

interface iStyle {
  headerBGColorStyle: Properties;
  emphasisColorStyle: Properties;
  emphasisComplimentColorStyle: Properties;
  bgColorStyle: Properties;
  logoColorStyle: Properties;
  hxColorStyle: Properties;
  textColorStyle: Properties;
  colorBoxStyle: Properties;
  hxFontStyle: Properties;
  textFontStyle: Properties;
  selectedOutline: Properties;
}

const state = store.getState();

export const styles: iStyle = {
  headerBGColorStyle: {
    backgroundColor: colorResultToRgbaString(state.headerBGColor)
  },

  emphasisColorStyle: {
    backgroundColor: colorResultToRgbaString(state.emphasisColor)
  },

  emphasisComplimentColorStyle: {
    backgroundColor: colorResultToRgbaString(state.emphasisComplimentColor)
  },

  bgColorStyle: {
    backgroundColor: colorResultToRgbaString(state.bgColor)
  },

  logoColorStyle: {
    backgroundColor: colorResultToRgbaString(state.logoColor)
  },

  hxColorStyle: {
    backgroundColor: colorResultToRgbaString(state.hxColor)
  },

  textColorStyle: {
    backgroundColor: colorResultToRgbaString(state.textColor)
  },

  colorBoxStyle: {
    height: '18px',
    width: '18px',
    border: '1px solid #c1c1c1',
    borderRadius: '5px'
  },

  hxFontStyle: {
    fontFamily: state.hxFont,
    fontSize: state.hxFontSize,
    fontWeight: state.hxFontWeight
  },

  textFontStyle: {
    fontFamily: state.textFont,
    fontSize: state.textFontSize,
    fontWeight: state.textFontWeight
  },

  selectedOutline: {
    outline: '5px auto -webkit-focus-ring-color'
  }
};
