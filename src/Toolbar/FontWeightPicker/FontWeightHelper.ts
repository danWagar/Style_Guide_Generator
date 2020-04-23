import { Props } from '../../reduxInterface';

const allWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const fontWeights: { [key: string]: number[] } = {
  'Open Sans, sans-serif': [300, 400, 600, 700, 800],
  'Raleway, sans-serif': allWeights,
  'Montserrat, sans-serif': allWeights,
  'Roboto, sans-serif': [100, 300, 400, 500, 700, 900],
  'Lato, sans-serif': [100, 300, 400, 700, 900]
};

export const getFontWeights = (
  selected: string | null | undefined,
  logoFont: string,
  hxFont: string,
  textFont: string
) => {
  let fontType = '';
  switch (selected) {
    case 'Logo':
      fontType = logoFont;
    case 'Hx':
      fontType = hxFont;
    case 'Text':
      fontType = textFont;
    default:
      fontType = 'Lato, sans-serif';
  }
  const weightsArr = fontWeights[fontType];
  return weightsArr;
};
