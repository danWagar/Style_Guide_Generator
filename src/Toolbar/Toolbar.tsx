import React, { useState } from 'react';
import { Props, connector } from '../reduxPropTypes';
import { SketchPicker, ColorResult } from 'react-color';
import Selector from './Selector/Selector';
import RecentColors from './RecentColors/RecentColors';
import './Toolbar.css';

const Toolbar: React.FC<Props> = props => {
  const {
    selected,
    changeSelected,
    headerBGColor,
    emphasisColor,
    emphasisComplimentColor,
    bgColor,
    hxColor,
    textColor,
    changeHeaderBGColor,
    changeEmphasisColor,
    changeEmphasisComplimentColor,
    changeBGColor,
    changeHxColor,
    changeTextColor
  } = props;

  const initialColors = [bgColor, hxColor, textColor, emphasisColor, emphasisComplimentColor, headerBGColor];

  const [recentColors, setRecentColors] = useState<Array<string>>(initialColors);
  const [selectedColor, setSelectedColor] = useState<string>('#fff');
  const [showToolbar, setShowToolbar] = useState<boolean>(false);

  const generateRecentColors = (col: string) => {
    if (recentColors.includes(col)) return;
    setRecentColors([...recentColors.slice(1, 6), col]);
  };

  const handleChangeComplete = (col: ColorResult) => {
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
        return '#fff';
    }
  };

  const handleSelectedColorChange = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(typeof e.currentTarget.dataset.id);
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
            <Selector handleSelectedColorChange={handleSelectedColorChange} />
            <RecentColors colors={recentColors} handleChangeComplete={handleChangeComplete} />
          </div>
          <div className="Toolbar_color_picker">
            <SketchPicker color={selectedColor} onChangeComplete={handleChangeComplete} />
          </div>
        </div>
      )}
    </>
  );
};

export default connector(Toolbar);
