import React from 'react';
import { Props, connector } from '../../reduxPropTypes';
import './Selector.css';
import { changeSelected } from '../../store/action';

const Selector: React.FC<Props> = props => {
  const { selected, changeSelected } = props;

  const handleHeaderBackgroundSelector = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(typeof e.currentTarget.dataset.id);
    changeSelected(e.currentTarget.dataset.id);
  };

  return (
    <ul className="Selector_list">
      <li
        className={selected === 'Header Background' ? 'selected' : ''}
        onClick={handleHeaderBackgroundSelector}
        data-id="Header Background"
      >
        Header Background
      </li>
      <li
        className={selected === 'Emphasis' ? 'selected' : ''}
        onClick={handleHeaderBackgroundSelector}
        data-id="Emphasis"
      >
        Emphasis
      </li>
      <li
        className={selected === 'Emphasis Compliment' ? 'selected' : ''}
        onClick={handleHeaderBackgroundSelector}
        data-id="Emphasis Compliment"
      >
        Emphasis Compliment
      </li>
    </ul>
  );
};

export default connector(Selector);
