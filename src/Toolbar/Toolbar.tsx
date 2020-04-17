import React, { useState, useEffect } from 'react';
import { Props, connector } from '../reduxInterface';
import { SketchPicker, ColorResult } from 'react-color';
import Selector from './Selector/Selector';
import RecentColors from './RecentColors/RecentColors';
import FontPicker from './FontPicker/FontPicker';
import FontSizePicker from './FontSizePicker/FontSizePicker';
import './Toolbar.css';
import { changeHxFont } from '../store/action';

const Toolbar: React.FC<Props> = props => {
  const {
    selected,
    changeSelected,
    headerBGColor,
    emphasisColor,
    emphasisComplimentColor,
    logoColor,
    bgColor,
    hxColor,
    textColor,
    changeHeaderBGColor,
    changeEmphasisColor,
    changeEmphasisComplimentColor,
    changeBGColor,
    changeLogoColor,
    changeHxColor,
    changeTextColor,
    changeLogoFont,
    changeHxFont,
    changeTextFont
  } = props;

  const initialColors = [
    bgColor,
    logoColor,
    hxColor,
    textColor,
    emphasisColor,
    emphasisComplimentColor,
    headerBGColor
  ];

  const [recentColors, setRecentColors] = useState<Array<ColorResult>>(initialColors);
  const [selectedColor, setSelectedColor] = useState<ColorResult>({
    hex: 'fff',
    rgb: { r: 255, g: 255, b: 255, a: 1 },
    hsl: { h: 0, s: 0, l: 1, a: 1 }
  });
  const [selectedFont, setSelectedFont] = useState<string>('Roboto, sans-serif');
  const [showToolbar, setShowToolbar] = useState<boolean>(false);

  useEffect(() => {
    const color = getSelectedColor();
    setSelectedColor(color);
  }, [selected]);

  const generateRecentColors = (col: ColorResult) => {
    if (recentColors.includes(col)) return;
    setRecentColors([...recentColors.slice(1, 6), col]);
  };

  const handleColorChangeComplete = (col: ColorResult) => {
    generateRecentColors(col);
    setSelectedColor(col);
    switch (selected) {
      case 'Header Background':
        changeHeaderBGColor(col);
        return;
      case 'Emphasis':
        changeEmphasisColor(col);
        return;
      case 'Emphasis Compliment':
        changeEmphasisComplimentColor(col);
        return;
      case 'Background':
        changeBGColor(col);
        return;
      case 'Logo':
        changeLogoColor(col);
        return;
      case 'Hx':
        changeHxColor(col);
        return;
      case 'Text':
        changeTextColor(col);
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
      case 'Background':
        return bgColor;
      case 'Hx':
        return hxColor;
      case 'Text':
        return textColor;
      default:
        return { hex: '#000', hsl: { h: 0, s: 0, l: 0, a: 1 }, rgb: { r: 0, g: 0, b: 0, a: 1 } };
    }
  };

  const toggleHideToolbar = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowToolbar(!showToolbar);
  };

  return (
    <>
      <div className="Toolbar_toggle" onClick={toggleHideToolbar}>
        Toolbar
      </div>
      {!showToolbar && (
        <div className="Toolbar">
          <div className="Toolbar_top">
            <Selector />
            <RecentColors colors={recentColors} handleChangeComplete={handleColorChangeComplete} />
          </div>
          <div className="Toolbar_fonts">
            <FontPicker />
            <FontSizePicker />
          </div>
          <div className="Toolbar_color_picker">
            <SketchPicker color={selectedColor.rgb} onChangeComplete={handleColorChangeComplete} />
          </div>
        </div>
      )}
    </>
  );
};

export default connector(Toolbar);
