import React, { PropTypes } from 'react';
import style from './style.css';
import ImageSample from './sample.png';

const Counter = ({ count, onIncrement, onDecrement }) => (
  <div>
    <p className={style.hoge}>{ count }</p>
    <button onClick={() => onIncrement()}>increment</button>
    <button onClick={() => onDecrement()}>decrement</button>
    <div style={{ marginTop: '10px' }}><img src={ImageSample} alt="sample" /></div>
    <div className={style.fuga}>fuga</div>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
