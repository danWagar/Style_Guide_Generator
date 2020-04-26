import React from 'react';
import { Props, connector } from '../../reduxInterface';
import { styles } from '../../styles';
import CSS from 'csstype';
import './Selector.css';

const Selector: React.FC<Props> = props => {
  const { selected, changeSelected } = props;

  const handleChangeComplete = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget.dataset.id;
    if (selected === target) changeSelected(null);
    else changeSelected(e.currentTarget.dataset.id);
  };

  return (
    <ul className="Selector_list">
      <li
        className={selected === 'Header Background' ? 'selected' : ''}
        onClick={handleChangeComplete}
        data-id="Header Background"
      >
        <div style={{ ...styles.colorBoxStyle, ...styles.headerBGColorStyle }}></div>
        Header Background
      </li>
      <li
        className={selected === 'Emphasis' ? 'selected' : ''}
        onClick={handleChangeComplete}
        data-id="Emphasis"
      >
        <div style={{ ...styles.colorBoxStyle, ...styles.emphasisColorStyle }}></div>
        Emphasis
      </li>
      <li
        className={selected === 'Emphasis Compliment' ? 'selected' : ''}
        onClick={handleChangeComplete}
        data-id="Emphasis Compliment"
      >
        <div style={{ ...styles.colorBoxStyle, ...styles.emphasisComplimentColorStyle }}></div>
        Emphasis Compliment
      </li>
      <li
        className={selected === 'Background' ? 'selected' : ''}
        onClick={handleChangeComplete}
        data-id="Background"
      >
        <div style={{ ...styles.colorBoxStyle, ...styles.bgColorStyle }}></div>
        Background
      </li>
      <li className={selected === 'Logo' ? 'selected' : ''} onClick={handleChangeComplete} data-id="Logo">
        <div style={{ ...styles.colorBoxStyle, ...styles.logoColorStyle }}></div>
        Logo
      </li>
      <li className={selected === 'Hx' ? 'selected' : ''} onClick={handleChangeComplete} data-id="Hx">
        <div style={{ ...styles.colorBoxStyle, ...styles.hxColorStyle }}></div>
        Hx
      </li>
      <li className={selected === 'Text' ? 'selected' : ''} onClick={handleChangeComplete} data-id="Text">
        <div style={{ ...styles.colorBoxStyle, ...styles.textColorStyle }}></div>
        Text
      </li>
    </ul>
  );
};

export default connector(Selector);
