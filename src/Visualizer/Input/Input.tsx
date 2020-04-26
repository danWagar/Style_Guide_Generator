import React from 'react';
import { Props, connector } from '../../reduxInterface';
import './Input.css';
import CSS from 'csstype';

interface iInput extends Props {
  parentStateCallback: () => void;
  toChange: string;
  defaultValue?: string;
  style?: CSS.Properties;
  className?: string;
  textField?: boolean;
  height?: number;
}

const Input: React.FC<iInput> = props => {
  const {
    parentStateCallback,
    toChange,
    defaultValue,
    style,
    changeLogoText,
    changeHeroText,
    changeBodyText,
    className,
    textField,
    height
  } = props;

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) handleInputSubmit(e);
  };

  const handleInputSubmit = (
    e:
      | React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(toChange);
    let input = e.currentTarget.value;
    input = input.trim();
    input = checkEmptyStr(input);
    console.log(input);
    switch (toChange) {
      case 'Logo':
        changeLogoText(input);
        break;
      case 'Hero':
        changeHeroText(input);
        break;
      case 'Body':
        changeBodyText(input);
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
      {textField ? (
        <textarea
          className={'Input ' + className}
          name={toChange}
          defaultValue={defaultValue}
          //onKeyPress={handleEnter}
          autoFocus
          onBlur={handleInputSubmit}
          style={{ ...style, height: `${height}px` }}
        />
      ) : (
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
      )}
    </>
  );
};

export default connector(Input);
