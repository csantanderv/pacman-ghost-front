import React, { useEffect } from 'react';
import EatImg from '../../assets/eat.svg';
import { useSelector } from 'react-redux';
import { getCounter } from '../../store/Selector';
import './style.scss';

const Eaten = () => {
  const counter = useSelector(getCounter);

  useEffect(() => {
    console.log(
      'Se ejecuta useEffect con [counter]: solo cuando counter cambia',
    );
  }, [counter]);

  useEffect(() => {
    console.log('Se ejecuta useEffect con []: solo primera vez');
  }, []);

  useEffect(() => {
    console.log('Se ejecuta useEffect sin segundo parámetro: todo el tiempo');
  });

  useEffect(() => {});

  return (
    <div className='eaten'>
      <div className='eaten-img'>
        <img src={EatImg} alt='Eat'></img>
      </div>
      <div className='eaten-total'>
        <h2>{counter}</h2>
      </div>
    </div>
  );
};

export default Eaten;
