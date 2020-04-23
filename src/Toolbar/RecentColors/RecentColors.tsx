import React from 'react';
import { Props, connector } from '../../reduxInterface';
import { ColorResult } from 'react-color';
import { colorResultToRgbaString } from '../../colorConvert';
import Styles from '../../styles';
import './RecentColors.css';

interface IRecentColors extends Props {
  colors: Array<ColorResult>;
  handleChangeComplete: (col: ColorResult) => void;
}

const RecentColors: React.FC<IRecentColors> = props => {
  const { colors, handleChangeComplete } = props;
  const style = new Styles(props);

  const generateColorBoxes = () => {
    let colorBoxes = [];
    for (let i = colors.length - 1; i >= 0; i--) {
      colorBoxes.push(
        <li onClick={() => handleChangeComplete(colors[i])}>
          <div style={{ ...style.getColorBoxStyle(), backgroundColor: colorResultToRgbaString(colors[i]) }} />
        </li>
      );
    }
    return colorBoxes;
  };

  return (
    <div className="RecentColors">
      <ul>{generateColorBoxes()}</ul>
    </div>
  );
};

export default connector(RecentColors);
