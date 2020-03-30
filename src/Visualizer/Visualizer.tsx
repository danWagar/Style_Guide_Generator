import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { changeHeaderBGColor } from '../store/action';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import './Vizualizer.css';

interface RootState {
  headerBGColor: string;
}

const mapState = (state: RootState) => ({
  headerBGColor: state.headerBGColor
});

const mapDispatch = {
  changeHeaderBGColor: () => ({ type: 'CHANGE_HEADER_BG_COLOR' })
};

const connector = connect(
  mapState,
  mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

const Visualizer: React.FC<Props> = props => {
  return (
    <div className="Vizualizer_container">
      <Header {...props} />
      <LandingPage />
    </div>
  );
};

export default connector(Visualizer);
