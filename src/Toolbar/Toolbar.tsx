import React, { useState } from 'react';
import { Props, connector } from '../reduxPropTypes';
import { SketchPicker, ColorChangeHandler, HSLColor, RGBColor } from 'react-color';
import Selector from './Selector/Selector';
import './Toolbar.css';

const Toolbar: React.FC<Props> = props => {
  const {
    selected,
    headerBGColor,
    emphasisColor,
    emphasisComplimentColor,
    changeHeaderBGColor,
    changeEmphasisColor,
    changeEmphasisComplimentColor
  } = props;
  console.log(headerBGColor);

  const handleChangeComplete: ColorChangeHandler = col => {
    switch (selected) {
      case 'Header Background':
        changeHeaderBGColor(col.hex);
        return;
      case 'Emphasis':
        changeEmphasisColor(col.hex);
        return;
      case 'Emphasis Compliment':
        changeEmphasisComplimentColor(col.hex);
        return;
      default:
        return;
    }
  };

  const getSelectedColor = () => {
    switch (selected) {
      case 'Header Background':
        return headerBGColor;
      case 'Emphasis':
        return emphasisColor;
      case 'Emphasis Compliment':
        return emphasisComplimentColor;
      default:
        return '#fff';
    }
  };

  console.log('selected is ' + selected);
  const blah = getSelectedColor();
  console.log(blah);
  return (
    <div className="Toolbar">
      <Selector />
      <div className="Toolbar_color_picker">
        <SketchPicker color={getSelectedColor()} onChangeComplete={handleChangeComplete} />
      </div>
    </div>
  );
};

export default connector(Toolbar);
