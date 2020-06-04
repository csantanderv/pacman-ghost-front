import React, { useEffect, useState } from 'react';
import CementertImg from '../../assets/cementery.svg';
import { useSelector } from 'react-redux';
import { getCounter } from '../../store/Selector';
import './style.scss';

const Cementery = () => {
  const counter = useSelector(getCounter);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(counter);
  }, [counter]);

  return (
    <div className='cementery'>
      <div className='cementery-img'>
        <img src={CementertImg} alt='Cementery'></img>
      </div>
      <div className='cementery-total'>
        <h2>{total}</h2>
      </div>
    </div>
  );
};

export default Cementery;
