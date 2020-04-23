import { Props } from '../../reduxInterface';

const allWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const getSelectedFontType = (props: Props): string => {
  switch (props.selected) {
    case 'Logo':
      return props.logoFont;
    case 'Hx':
      return props.hxFont;
    case 'Text':
      return props.textFont;
    default:
      return 'Lato, sans-serif';
  }
};

export const getFontWeights = (props: Props) => {
  const weightsArr = fontWeights[getSelectedFontType(props)];
  return weightsArr;
};

const fontWeights: { [key: string]: number[] } = {
  'Open Sans, sans-serif': [300, 400, 600, 700, 800],
  'Raleway, sans-serif': allWeights,
  'Montserrat, sans-serif': allWeights,
  'Roboto, sans-serif': [100, 300, 400, 500, 700, 900],
  'Lato, sans-serif': [100, 300, 400, 700, 900]
};
