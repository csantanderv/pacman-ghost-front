import React from 'react';
import GhostField from '../GhostField';
import BossHouse from '../BossHouse';
import './style.scss';

const Board = () => {
  return (
    <div className='board'>
      <BossHouse />
      <GhostField />
    </div>
  );
};

export default Board;
