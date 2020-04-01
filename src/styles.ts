import { Props } from './reduxPropTypes';
import { Properties } from 'csstype';

export default class Styles {
  headerBGColorStyle!: Properties;
  emphasisColorStyle!: Properties;
  emphasisComplimentColorStyle!: Properties;
  bgColorStyle!: Properties;
  hxColorStyle!: Properties;
  textColorStyle!: Properties;
  colorBoxStyle: Properties;

  constructor(props: Props) {
    this.headerBGColorStyle = {
      backgroundColor: props.headerBGColor
    };

    this.emphasisColorStyle = {
      backgroundColor: props.emphasisColor
    };

    this.emphasisComplimentColorStyle = {
      backgroundColor: props.emphasisComplimentColor
    };

    this.bgColorStyle = {
      backgroundColor: props.bgColor
    };

    this.hxColorStyle = {
      backgroundColor: props.hxColor
    };

    this.textColorStyle = {
      backgroundColor: props.textColor
    };

    this.colorBoxStyle = {
      height: '20px',
      width: '20px',
      border: '1px solid #c1c1c1',
      borderRadius: '5px'
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
  getHxColorStyle(): Properties {
    return this.hxColorStyle;
  }
  getTextColorStyle(): Properties {
    return this.textColorStyle;
  }
  getColorBoxStyle(): Properties {
    return this.colorBoxStyle;
  }
  backgroundColorStyle(col: string): Properties {
    return {
      backgroundColor: col
    };
  }
}
