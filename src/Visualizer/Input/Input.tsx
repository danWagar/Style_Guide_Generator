import React from 'react';
import { Props, connector } from '../../reduxPropTypes';
import './Input.css';

interface IInput extends Props {
  parentStateCallback: () => void;
  toChange: string;
}

const Input: React.FC<IInput> = props => {
  const { logoText, parentStateCallback, toChange, changeLogoText } = props;

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) handleInputSubmit(e);
  };

  const handleInputSubmit = (
    e: React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>
  ) => {
    switch (toChange) {
      case 'Logo':
        updateLogoText(e.currentTarget.value);
      default:
        console.log('error: selected element not provided for input submittal');
    }
  };

  const updateLogoText = (newStr: string) => {
    if (newStr === '') newStr = '\u00a0';
    changeLogoText(newStr);
    parentStateCallback();
  };

  return (
    <>
      <input
        className="Input"
        name="logoInputText"
        type="text"
        defaultValue={logoText}
        onKeyPress={handleEnter}
        autoFocus
        onBlur={handleInputSubmit}
      />
    </>
  );
};

export default connector(Input);
