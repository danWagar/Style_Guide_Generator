import React, { ReactEventHandler } from 'react';
import { Props, connector } from '../../reduxInterface';

const FontPicker: React.FC<Props> = props => {
  const { selected, changeLogoFont, changeHxFont, changeTextFont, logoFont, hxFont, textFont } = props;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (selected) {
      case 'Logo':
        changeLogoFont(e.currentTarget.value);
        return;
      case 'Hx':
        changeHxFont(e.currentTarget.value);
        return;
      case 'Text':
        changeTextFont(e.currentTarget.value);
        return;
      default:
        return;
    }
  };

  const getSelectedValue = (): string | number | string[] | undefined => {
    switch (selected) {
      case 'Logo':
        return logoFont;
      case 'Hx':
        return hxFont;
      case 'Text':
        return textFont;
      default:
        return 'Loto, sans-serif';
    }
  };

  const disableSelect = () => {
    const enabled = ['Logo', 'Hx', 'Text'];
    if (selected && enabled.includes(selected)) return false;
    return true;
  };

  console.log(disableSelect());

  return (
    <>
      <label htmlFor="font">Font:</label>
      <select id="font" value={getSelectedValue()} onChange={handleChange} disabled={disableSelect()}>
        <option value="Loto, sans-serif">Loto</option>
        <option value="Montserrat, sans-serif">Montserrat</option>
        <option value="Open Sans, sans-serif">Open Sans</option>
        <option value="Raleway, sans-serif">Raleway</option>
        <option value="Roboto, sans-serif">Roboto</option>
      </select>
    </>
  );
};

export default connector(FontPicker);
