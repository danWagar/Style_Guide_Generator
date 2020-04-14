import React from 'react';
import { Props, connector } from '../../reduxInterface';
import { ColorChangeHandler, ColorResult } from 'react-color';
import { hexToHSL, hexToRGB } from '../../colorConvert';
import Styles from '../../styles';
import './RecentColors.css';

interface IRecentColors extends Props {
  colors: Array<string>;
  handleChangeComplete: (col: ColorResult) => void;
}

const RecentColors: React.FC<IRecentColors> = props => {
  const { colors, handleChangeComplete } = props;
  const style = new Styles(props);

  const generateColorBoxes = () => {
    let colorBoxes = [];
    for (let i = colors.length - 1; i >= 0; i--) {
      colorBoxes.push(
        <li
          onClick={() =>
            handleChangeComplete({
              hex: colors[i],
              hsl: hexToHSL(colors[i]),
              rgb: hexToRGB(colors[i])
            })
          }
        >
          <div style={{ ...style.getColorBoxStyle(), backgroundColor: colors[i] }} />
        </li>
      );
    }
    return colorBoxes;
  };

  return (
    <div className="RecentColors">
      Recent Colors:
      <ul>{generateColorBoxes()}</ul>
    </div>
  );
};

export default connector(RecentColors);
