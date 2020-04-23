import React from 'react';
import { CustomPicker, ColorResult, InjectedColorProps } from 'react-color';
import { ExportedColorProps } from 'react-color/lib/components/common/ColorWrap';
const { EditableInput } = require('react-color/lib/components/common');

const CustomColorPicker: React.FC<InjectedColorProps & ExportedColorProps> = props => {
  const inputStyles = {
    input: {
      border: 'none'
    },
    label: {
      fontSize: '12px',
      color: '#fff'
    }
  };

  const handleChange = () => {};

  return (
    <>
      <div>MyColorPicker</div>;
      <EditableInput style={inputStyles} label="hex" value={props.color} onChange={handleChange} />;
    </>
  );
};

export default CustomPicker(CustomColorPicker);
