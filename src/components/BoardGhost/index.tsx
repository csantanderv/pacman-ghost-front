import React from 'react';
import BossHouse from '../BossHouse/index';
import AttackField from '../AttackField/index';
import './style.scss';

const BoardGhost = () => {
  return (
    <div className='board'>
      <BossHouse />
      <AttackField />
    </div>
  );
};

export default BoardGhost;
