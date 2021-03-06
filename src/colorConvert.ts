//Convert hex color to color spaces in format supported by react-color

import convert from 'color-convert';
import { ColorResult } from 'react-color';

export const colorResultToRgbaString = (col: ColorResult) => {
  return `rgba(${col.rgb.r}, ${col.rgb.g}, ${col.rgb.b}, ${col.rgb.a})`;
};

export const hexToHSL = (hex: string) => {
  const hslValue = convert.hex.hsl(hex);
  const hsl = {
    h: hslValue[0],
    s: hslValue[1],
    l: hslValue[2],
    a: 1
  };

  return hsl;
};

export const hexToRGB = (hex: string) => {
  const rgbValue = convert.hex.rgb(hex);
  const rgb = {
    r: rgbValue[0],
    g: rgbValue[1],
    b: rgbValue[2],
    a: 1
  };

  return rgb;
};
