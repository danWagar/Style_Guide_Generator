import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { SketchPicker, ColorChangeHandler } from 'react-color';
import './Toolbar.css';

interface RootState {
  headerBGColor: string;
}

const mapState = (state: RootState) => ({
  headerBGColor: state.headerBGColor
});

const mapDispatch = {
  changeHeaderBGColor: (color: string) => ({ type: 'CHANGE_HEADER_BG_COLOR', payload: color })
};

const connector = connect(
  mapState,
  mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

const Toolbar: React.FC<Props> = props => {
  const { headerBGColor, changeHeaderBGColor } = props;
  console.log(changeHeaderBGColor);

  const handleChangeComplete: ColorChangeHandler = col => {
    changeHeaderBGColor(col.hex);
  };

  return (
    <div className="Toolbar">
      <div className="Toolbar_color_picker">
        <SketchPicker color={headerBGColor} onChangeComplete={handleChangeComplete} />
      </div>
    </div>
  );
};

export default connector(Toolbar);
