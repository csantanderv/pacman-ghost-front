import React, { FC } from 'react';
import BossHouse from '../BossHouse/index';
import AttackField from '../AttackField/index';
import './style.scss';

const BoardGhost: FC = () => {
  return (
    <div className='board'>
      <BossHouse />
      <AttackField />
    </div>
  );
};

export default BoardGhost;
