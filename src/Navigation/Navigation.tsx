import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import './Navigation.css';
import { vizualizerReducer } from '../store/reducers';

const Navigation: React.FC = () => {
  const history = useHistory();
  const [visualizerTabOpen, setVisualizerTabOpen] = useState<boolean>(true);
  const [styleGuideTabOpen, setStyleGuideTabOpen] = useState<boolean>(false);

  const goToVizualizer = () => {
    if (!visualizerTabOpen) {
      setStyleGuideTabOpen(!styleGuideTabOpen);
      setVisualizerTabOpen(!visualizerTabOpen);
      history.push('/');
    }
  };

  const goToStyleGuide = () => {
    if (!styleGuideTabOpen) {
      setVisualizerTabOpen(!visualizerTabOpen);
      setStyleGuideTabOpen(!styleGuideTabOpen);
      history.push('/style-guide');
    }
  };

  return (
    <div className="Navigation">
      <div className={classNames({ Navigation_tab: true, open: visualizerTabOpen })} onClick={goToVizualizer}>
        Visualizer
      </div>
      <div
        className={classNames({ Navigation_tab: true, open: styleGuideTabOpen, not_first: true })}
        onClick={goToStyleGuide}
      >
        Style Guide
      </div>
    </div>
  );
};

export default Navigation;
