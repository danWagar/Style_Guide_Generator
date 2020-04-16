import React from 'react';
import { Props, connector } from '../../reduxInterface';
import Styles from '../../styles';
import CSS from 'csstype';
import './Selector.css';

const Selector: React.FC<Props> = props => {
  const { selected, changeSelected } = props;

  const style = new Styles(props);

  const handleChangeComplete = (e: React.MouseEvent<HTMLLIElement>) => {
    changeSelected(e.currentTarget.dataset.id);
  };

  return (
    <ul className="Selector_list">
      <li
        className={selected === 'Header Background' ? 'selected' : ''}
        onClick={handleChangeComplete}
        data-id="Header Background"
      >
        <div style={{ ...style.getColorBoxStyle(), ...style.getHeaderBGColorStyle() }}></div>
        Header Background
      </li>
      <li
        className={selected === 'Emphasis' ? 'selected' : ''}
        onClick={handleChangeComplete}
        data-id="Emphasis"
      >
        <div style={{ ...style.getColorBoxStyle(), ...style.getEmphasisColorStyle() }}></div>
        Emphasis
      </li>
      <li
        className={selected === 'Emphasis Compliment' ? 'selected' : ''}
        onClick={handleChangeComplete}
        data-id="Emphasis Compliment"
      >
        <div style={{ ...style.getColorBoxStyle(), ...style.getEmphasisComplimentColorStyle() }}></div>
        Emphasis Compliment
      </li>
      <li
        className={selected === 'Background' ? 'selected' : ''}
        onClick={handleChangeComplete}
        data-id="Background"
      >
        <div style={{ ...style.getColorBoxStyle(), ...style.getBGColorStyle() }}></div>
        Background
      </li>
      <li className={selected === 'Logo' ? 'selected' : ''} onClick={handleChangeComplete} data-id="Logo">
        <div style={{ ...style.getColorBoxStyle(), ...style.getLogoColorStyle() }}></div>
        Logo
      </li>
      <li className={selected === 'Hx' ? 'selected' : ''} onClick={handleChangeComplete} data-id="Hx">
        <div style={{ ...style.getColorBoxStyle(), ...style.getHxColorStyle() }}></div>
        Hx
      </li>
      <li className={selected === 'Text' ? 'selected' : ''} onClick={handleChangeComplete} data-id="Text">
        <div style={{ ...style.getColorBoxStyle(), ...style.getTextColorStyle() }}></div>
        Text
      </li>
    </ul>
  );
};

export default connector(Selector);
