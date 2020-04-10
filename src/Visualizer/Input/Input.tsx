import React from 'react';
import { Props, connector } from '../../reduxPropTypes';
import './Input.css';
import CSS from 'csstype';

interface IInput extends Props {
  parentStateCallback: () => void;
  toChange: string;
  defaultValue?: string;
  style?: CSS.Properties;
  className?: string;
}

const Input: React.FC<IInput> = props => {
  const {
    parentStateCallback,
    toChange,
    defaultValue,
    style,
    changeLogoText,
    changeHeroText,
    className
  } = props;

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) handleInputSubmit(e);
  };

  const handleInputSubmit = (
    e: React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>
  ) => {
    console.log(toChange);
    let input = e.currentTarget.value;
    input = checkEmptyStr(input);
    console.log(input);
    switch (toChange) {
      case 'Logo':
        changeLogoText(input);
        break;
      case 'Hero':
        changeHeroText(input);
        break;
      default:
        console.log('error: selected element not provided for input submittal');
        break;
    }
    parentStateCallback();
  };

  const checkEmptyStr = (newStr: string) => {
    if (newStr === '') newStr = '\u00a0';
    return newStr;
  };

  return (
    <>
      <input
        className={'Input ' + className}
        name={toChange}
        type="text"
        defaultValue={defaultValue}
        onKeyPress={handleEnter}
        autoFocus
        onBlur={handleInputSubmit}
        style={style}
      />
    </>
  );
};

export default connector(Input);
