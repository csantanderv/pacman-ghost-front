import React from 'react';
import GhostField from '../GhostField';
import BossHouse from '../BossHouse/index';
import './style.scss';

const BoardGhost = () => {
  return (
    <div className='board'>
      <BossHouse />
      <GhostField />
    </div>
  );
};

export default BoardGhost;
