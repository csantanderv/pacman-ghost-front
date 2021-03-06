import React, { FC } from 'react';
import BossImg from '../../assets/boss.svg';
import './style.scss';

const Boss: FC = () => {
  return (
    <div className='boss'>
      <div className='boss-img'>
        <img src={BossImg} alt='Boss' />
      </div>
    </div>
  );
};

export default Boss;
