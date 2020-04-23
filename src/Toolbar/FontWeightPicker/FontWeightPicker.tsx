import React from 'react';
import { Props, connector } from '../../reduxInterface';
import { getFontWeights } from './FontWeightHelper';
import '../FontPicker/FontPicker.css';

const FontWeightPicker: React.FC<Props> = props => {
  const {
    selected,
    changeLogoFontWeight,
    changeHxFontWeight,
    changeTextFontWeight,
    logoFontWeight,
    hxFontWeight,
    textFontWeight
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(selected);
    switch (selected) {
      case 'Logo':
        changeLogoFontWeight(Number(e.currentTarget.value));
        return;
      case 'Hx':
        changeHxFontWeight(Number(e.currentTarget.value));
        return;
      case 'Text':
        changeTextFontWeight(Number(e.currentTarget.value));
        return;
      default:
        return;
    }
  };

  const getSelectedValue = (): string | number | string[] | undefined => {
    switch (selected) {
      case 'Logo':
        return logoFontWeight;
      case 'Hx':
        return hxFontWeight;
      case 'Text':
        return textFontWeight;
      default:
        return 400;
    }
  };

  const disableSelect = () => {
    const enabled = ['Logo', 'Hx', 'Text'];
    if (selected && enabled.includes(selected)) return false;
    return true;
  };

  const generateOptionElements = () => {
    const selectedFontWeights = getFontWeights(props);
    return (
      <>
        {selectedFontWeights.map(weight => (
          <option value={weight}>{weight}</option>
        ))}
      </>
    );
  };

  return (
    <div>
      <label className="FontPicker_label" htmlFor="font_weight">
        Weight:
      </label>
      <select id="font_weight" value={getSelectedValue()} onChange={handleChange} disabled={disableSelect()}>
        {generateOptionElements()}
      </select>
    </div>
  );
};

export default connector(FontWeightPicker);
