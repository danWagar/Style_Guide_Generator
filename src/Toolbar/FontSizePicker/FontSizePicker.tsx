import React from 'react';
import { Props, connector } from '../../reduxInterface';
import '../FontPicker/FontPicker.css';

const FontSizePicker: React.FC<Props> = props => {
  const {
    selected,
    changeLogoFontSize,
    changeHxFontSize,
    changeTextFontSize,
    logoFontSize,
    hxFontSize,
    textFontSize
  } = props;

  const fontSizes = [
    '1px',
    '2px',
    '4px',
    '6px',
    '8px',
    '10px',
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '22px',
    '24px',
    '26px',
    '28px',
    '30px',
    '32px',
    '34px',
    '36px',
    '38px',
    '40px',
    '42px',
    '44px',
    '46px',
    '48px',
    '50px',
    '52px',
    '54px',
    '56px',
    '58px'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(selected);
    switch (selected) {
      case 'Logo':
        changeLogoFontSize(e.currentTarget.value);
        return;
      case 'Hx':
        console.log('changing hx font size');
        changeHxFontSize(e.currentTarget.value);
        return;
      case 'Text':
        changeTextFontSize(e.currentTarget.value);
        return;
      default:
        return;
    }
  };

  const getSelectedValue = (): string | number | string[] | undefined => {
    switch (selected) {
      case 'Logo':
        return logoFontSize;
      case 'Hx':
        return hxFontSize;
      case 'Text':
        return textFontSize;
      default:
        return 'Lato, sans-serif';
    }
  };

  const disableSelect = () => {
    const enabled = ['Logo', 'Hx', 'Text'];
    if (selected && enabled.includes(selected)) return false;
    return true;
  };

  const generateOptionElements = () => {
    return (
      <>
        {fontSizes.map(size => (
          <option value={size}>{size}</option>
        ))}
      </>
    );
  };

  console.log(disableSelect());

  return (
    <div>
      <label className="FontPicker_label" htmlFor="font_size">
        Size:
      </label>
      <select id="font_size" value={getSelectedValue()} onChange={handleChange} disabled={disableSelect()}>
        {generateOptionElements()}
      </select>
    </div>
  );
};

export default connector(FontSizePicker);
