import { useState, useEffect } from 'react';
import { Properties } from 'csstype';
import { colorResultToRgbaString } from './colorConvert';
import store from './store/store';
import { VisualizerState } from './store/types';

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

const getStylesObj = (state: VisualizerState) => {
  const stylesObj: iStyle = {
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

  return stylesObj;
};

export function useStyles() {
  const state = store.getState();
  const [styles, setStyles] = useState<iStyle>(getStylesObj(state));
  useEffect(() => {
    console.log(state.bgColor);
    setStyles(getStylesObj(state));
  }, [state]);

  return styles;
}
