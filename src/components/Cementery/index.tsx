import React, { FC } from 'react';
import CementertImg from '../../assets/cementery.svg';
import { useSelector } from 'react-redux';
import { getCounter } from '../../store/Selector';
import './style.scss';

const Cementery: FC = () => {
  const counter = useSelector(getCounter);
  return (
    <div className='cementery'>
      <div className='cementery-img'>
        <img src={CementertImg} alt='Cementery'></img>
      </div>
      <div className='cementery-total'>
        <h2>{counter}</h2>
      </div>
    </div>
  );
};

export default Cementery;
