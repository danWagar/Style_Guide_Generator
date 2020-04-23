import { Props } from './reduxInterface';
import { Properties } from 'csstype';
import { ColorResult } from 'react-color';
import { colorResultToRgbaString } from './colorConvert';

export default class Styles {
  headerBGColorStyle!: Properties;
  emphasisColorStyle!: Properties;
  emphasisComplimentColorStyle!: Properties;
  bgColorStyle!: Properties;
  logoColorStyle!: Properties;
  hxColorStyle!: Properties;
  textColorStyle!: Properties;
  colorBoxStyle: Properties;
  hxFontStyle: Properties;
  textFontStyle: Properties;

  constructor(props: Props) {
    this.headerBGColorStyle = {
      backgroundColor: colorResultToRgbaString(props.headerBGColor)
    };

    this.emphasisColorStyle = {
      backgroundColor: colorResultToRgbaString(props.emphasisColor)
    };

    this.emphasisComplimentColorStyle = {
      backgroundColor: colorResultToRgbaString(props.emphasisComplimentColor)
    };

    this.bgColorStyle = {
      backgroundColor: colorResultToRgbaString(props.bgColor)
    };

    this.logoColorStyle = {
      backgroundColor: colorResultToRgbaString(props.logoColor)
    };

    this.hxColorStyle = {
      backgroundColor: colorResultToRgbaString(props.hxColor)
    };

    this.textColorStyle = {
      backgroundColor: colorResultToRgbaString(props.textColor)
    };

    this.colorBoxStyle = {
      height: '20px',
      width: '20px',
      border: '1px solid #c1c1c1',
      borderRadius: '5px'
    };

    this.hxFontStyle = {
      fontFamily: props.hxFont,
      fontSize: props.hxFontSize,
      fontWeight: props.hxFontWeight
    };

    this.textFontStyle = {
      fontFamily: props.textFont,
      fontSize: props.textFontSize,
      fontWeight: props.textFontWeight
    };
  }

  getHeaderBGColorStyle(): Properties {
    return this.headerBGColorStyle;
  }
  getEmphasisColorStyle(): Properties {
    return this.emphasisColorStyle;
  }
  getEmphasisComplimentColorStyle(): Properties {
    return this.emphasisComplimentColorStyle;
  }
  getBGColorStyle(): Properties {
    return this.bgColorStyle;
  }
  getLogoColorStyle(): Properties {
    return this.logoColorStyle;
  }
  getHxColorStyle(): Properties {
    return this.hxColorStyle;
  }
  getTextColorStyle(): Properties {
    return this.textColorStyle;
  }
  getColorBoxStyle(): Properties {
    return this.colorBoxStyle;
  }
  getHxFontStyle(): Properties {
    return this.hxFontStyle;
  }
  getTextFontStyle(): Properties {
    return this.textFontStyle;
  }
}
