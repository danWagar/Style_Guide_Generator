import React from 'react';
import { Props, connector } from '../../reduxPropTypes';
import Styles from '../../styles';
import CSS from 'csstype';
import './Selector.css';

const Selector: React.FC<Props> = props => {
  const { selected, changeSelected } = props;

  const style = new Styles(props);

  const handleHeaderBackgroundSelector = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(typeof e.currentTarget.dataset.id);
    changeSelected(e.currentTarget.dataset.id);
  };

  const colorBoxStyle: CSS.Properties = {
    height: '20px',
    width: '20px',
    border: '1px solid #c1c1c1',
    borderRadius: '5px'
  };

  return (
    <ul className="Selector_list">
      <li
        className={selected === 'Header Background' ? 'selected' : ''}
        onClick={handleHeaderBackgroundSelector}
        data-id="Header Background"
      >
        <div style={{ ...colorBoxStyle, ...style.getHeaderBGColorStyle() }}></div>
        Header Background
      </li>
      <li
        className={selected === 'Emphasis' ? 'selected' : ''}
        onClick={handleHeaderBackgroundSelector}
        data-id="Emphasis"
      >
        <div style={{ ...colorBoxStyle, ...style.getEmphasisColorStyle() }}></div>
        Emphasis
      </li>
      <li
        className={selected === 'Emphasis Compliment' ? 'selected' : ''}
        onClick={handleHeaderBackgroundSelector}
        data-id="Emphasis Compliment"
      >
        <div style={{ ...colorBoxStyle, ...style.getEmphasisComplimentColorStyle() }}></div>
        Emphasis Compliment
      </li>
      <li
        className={selected === 'Background' ? 'selected' : ''}
        onClick={handleHeaderBackgroundSelector}
        data-id="Background"
      >
        <div style={{ ...colorBoxStyle, ...style.getBGColorStyle() }}></div>
        Background
      </li>
      <li
        className={selected === 'Hx' ? 'selected' : ''}
        onClick={handleHeaderBackgroundSelector}
        data-id="Hx"
      >
        <div style={{ ...colorBoxStyle, ...style.getHxColorStyle() }}></div>
        Hx
      </li>
      <li
        className={selected === 'Text' ? 'selected' : ''}
        onClick={handleHeaderBackgroundSelector}
        data-id="Text"
      >
        <div style={{ ...colorBoxStyle, ...style.getTextColorStyle() }}></div>
        Text
      </li>
    </ul>
  );
};

export default connector(Selector);
