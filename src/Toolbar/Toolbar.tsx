import React, { useState } from 'react';
import { SketchPicker, ColorChangeHandler } from 'react-color';
import './Toolbar.css';

const Toolbar: React.FC = () => {
  const [color, setColor] = useState('#fff');

  const handleChangeComplete: ColorChangeHandler = col => {
    setColor(col.hex);
  };

  return (
    <div className="Toolbar">
      <div className="Toolbar_color_picker">
        <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
      </div>
    </div>
  );
};

export default Toolbar;
