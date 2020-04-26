import React from 'react';
import { Props, connector } from '../reduxInterface';
import { styles } from '../styles';
import './StyleGuide.css';

const StyleGuide: React.FC<Props> = props => {
  const {
    headerBGColor,
    emphasisColor,
    emphasisComplimentColor,
    logoColor,
    bgColor,
    hxColor,
    textColor,
    logoFont,
    hxFont,
    textFont,
    logoFontSize,
    hxFontSize,
    textFontSize,
    logoFontWeight,
    hxFontWeight,
    textFontWeight
  } = props;

  return (
    <main className="StyleGuide">
      <section className="StyleGuide_colors">
        <h1>Colors</h1>
        <div className="StyleGuide_colors_container">
          <h2>Header</h2>
          <div className="StyleGuide_header_colors">
            <div className="StyleGuide_header_bg_color" style={styles.headerBGColorStyle}></div>
            <p className="StyleGuide_header_bg_color_value">{headerBGColor.hex}</p>
            <div className="StyleGuide_emphasis_color" style={styles.emphasisColorStyle}></div>
            <p className="StyleGuide_emphasis_color_value">{emphasisColor.hex}</p>
            <div
              className="StyleGuide_emphasis_compliment_color"
              style={styles.emphasisComplimentColorStyle}
            ></div>
            <p className="StyleGuide_emphasis_compliment_color_value">{emphasisComplimentColor.hex}</p>
          </div>
          <h2>Body</h2>
          <div className="StyleGuide_body_colors">
            <div className="StyleGuide_bg_color" style={styles.bgColorStyle}></div>
            <p className="StyleGuide_bg_color_value">{bgColor.hex}</p>
            <div className="StyleGuide_hx_color" style={styles.hxColorStyle}></div>
            <p className="StyleGuide_hx_color_value">{hxColor.hex}</p>
            <div className="StyleGuide_text_color" style={styles.textColorStyle}></div>
            <p className="StyleGuide_text_color_value">{textColor.hex}</p>
          </div>
        </div>
      </section>
      <section className="StyleGuide_typography">
        <h1>Typography</h1>
        <div className="StyleGuide_typography_container">
          <div className="StyleGuide_heading_font_details">
            <span className="weighted_text">Heading</span>
            <span>Font: {hxFont}</span>
            <span>Size: {hxFontSize}</span>
            <span>Weight: {hxFontWeight}</span>
          </div>
          <p className="StyleGuide_heading_font" style={styles.hxFontStyle}>
            The quick brown fox . . .
          </p>
          <div className="StyleGuide_text_font_details">
            <span className="weighted_text">Body Text</span>
            <span>Font: {textFont}</span>
            <span>Size: {textFontSize}</span>
            <span>Weight: {textFontWeight}</span>
          </div>
          <p className="StyleGuide_text_font" style={styles.textFontStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </main>
  );
};

export default connector(StyleGuide);
