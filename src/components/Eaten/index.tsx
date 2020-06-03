import React, { useEffect, useState } from 'react';
import EatImg from '../../assets/eat.svg';
import { useSelector } from 'react-redux';
import { getCounter } from '../../store/Selector';
import './style.scss';

const Eaten = () => {
  const counter = useSelector(getCounter);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(counter);
  }, [counter]);

  return (
    <div className='eaten'>
      <div className='eaten-img'>
        <img src={EatImg}></img>
      </div>
      <div className='eaten-total'>
        <h2>{total}</h2>
      </div>
    </div>
  );
};

export default Eaten;
