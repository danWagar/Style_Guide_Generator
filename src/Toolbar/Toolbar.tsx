import React, { useState } from 'react';
import { Props, connector } from '../reduxInterface';
import { SketchPicker, ColorResult } from 'react-color';
import Selector from './Selector/Selector';
import RecentColors from './RecentColors/RecentColors';
import FontPicker from './FontPicker/FontPicker';
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

  const [recentColors, setRecentColors] = useState<Array<string>>(initialColors);
  const [selectedColor, setSelectedColor] = useState<string>('#fff');
  const [selectedFont, setSelectedFont] = useState<string>('Roboto, sans-serif');
  const [showToolbar, setShowToolbar] = useState<boolean>(false);

  const generateRecentColors = (col: string) => {
    if (recentColors.includes(col)) return;
    setRecentColors([...recentColors.slice(1, 6), col]);
  };

  const handleColorChangeComplete = (col: ColorResult) => {
    generateRecentColors(col.hex);
    setSelectedColor(col.hex);
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
      case 'Background':
        changeBGColor(col.hex);
        return;
      case 'Logo':
        changeLogoColor(col.hex);
        return;
      case 'Hx':
        changeHxColor(col.hex);
        return;
      case 'Text':
        changeTextColor(col.hex);
        return;
      default:
        return;
    }
  };

  // const getSelectedColor = () => {
  //   switch (selected) {
  //     case 'Header Background':
  //       return headerBGColor;
  //     case 'Emphasis':
  //       return emphasisColor;
  //     case 'Emphasis Compliment':
  //       return emphasisComplimentColor;
  //     case 'Background':
  //       return bgColor;
  //     case 'Hx':
  //       return hxColor;
  //     case 'Text':
  //       return textColor;
  //     default:
  //       return '#fff';
  //   }
  // };

  const handleSelectedColorChange = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(e.currentTarget.dataset.id);
    changeSelected(e.currentTarget.dataset.id);
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
          <FontPicker />
          <div className="Toolbar_color_picker">
            <SketchPicker color={selectedColor} onChangeComplete={handleColorChangeComplete} />
          </div>
        </div>
      )}
    </>
  );
};

export default connector(Toolbar);
