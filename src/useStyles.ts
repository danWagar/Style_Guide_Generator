import { useState, useEffect } from 'react';
import { Properties } from 'csstype';
import { colorResultToRgbaString } from './colorConvert';
import store from './store/store';
import { VisualizerState } from './store/types';

interface iStyles {
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
  headerStyles: Properties;
  emphasisButtonStyle: Properties;
  logoStyles: Properties;
  mainStyle: Properties;
  hxStyle: Properties;
  textStyle: Properties;
}

const getStylesObj = (state: VisualizerState) => {
  const {
    logoFont,
    logoFontSize,
    logoFontWeight,
    hxFont,
    hxFontSize,
    hxFontWeight,
    textFont,
    textFontSize,
    textFontWeight
  } = state;
  const headerBGColor = colorResultToRgbaString(state.headerBGColor);
  const emphasisColor = colorResultToRgbaString(state.emphasisColor);
  const emphasisComplimentColor = colorResultToRgbaString(state.emphasisComplimentColor);
  const bgColor = colorResultToRgbaString(state.bgColor);
  const logoColor = colorResultToRgbaString(state.logoColor);
  const hxColor = colorResultToRgbaString(state.hxColor);
  const textColor = colorResultToRgbaString(state.textColor);

  const logoFontStyle = {
    fontFamily: logoFont,
    fontSize: logoFontSize,
    fontWeight: logoFontWeight
  };

  const hxFontStyle = {
    fontFamily: hxFont,
    fontSize: hxFontSize,
    fontWeight: hxFontWeight
  };

  const textFontStyle = {
    fontFamily: textFont,
    fontSize: textFontSize,
    fontWeight: textFontWeight
  };

  const stylesObj: iStyles = {
    headerBGColorStyle: {
      backgroundColor: headerBGColor
    },

    emphasisColorStyle: {
      backgroundColor: emphasisColor
    },

    emphasisComplimentColorStyle: {
      backgroundColor: emphasisComplimentColor
    },

    bgColorStyle: {
      backgroundColor: bgColor
    },

    logoColorStyle: {
      backgroundColor: logoColor
    },

    hxColorStyle: {
      backgroundColor: hxColor
    },

    textColorStyle: {
      backgroundColor: textColor
    },

    colorBoxStyle: {
      height: '18px',
      width: '18px',
      border: '1px solid #c1c1c1',
      borderRadius: '5px'
    },

    hxFontStyle: {
      ...hxFontStyle
    },

    textFontStyle: {
      ...textFontStyle
    },

    selectedOutline: {
      outline: '5px auto -webkit-focus-ring-color'
    },

    headerStyles: {
      backgroundColor: colorResultToRgbaString(state.headerBGColor)
    },

    emphasisButtonStyle: {
      color: emphasisComplimentColor,
      backgroundColor: emphasisColor
    },

    logoStyles: {
      color: logoColor,
      ...logoFontStyle
    },

    mainStyle: {
      backgroundColor: bgColor
    },

    hxStyle: {
      color: colorResultToRgbaString(state.hxColor),
      ...hxFontStyle
    },

    textStyle: {
      color: colorResultToRgbaString(state.textColor),
      ...textFontStyle
    }
  };

  return stylesObj;
};

export function useStyles() {
  const state = store.getState();
  const [styles, setStyles] = useState<iStyles>(getStylesObj(state));
  useEffect(() => {
    setStyles(getStylesObj(state));
  }, [state]);

  return styles;
}
