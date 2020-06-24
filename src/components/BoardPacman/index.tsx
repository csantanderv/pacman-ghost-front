import React from 'react';
import DinningField from '../DinningField';
import PacmanHouse from '../PacmanHouse';
import './style.scss';

const BoardPacman = () => {
  return (
    <div className='board'>
      <PacmanHouse />
      <DinningField />
    </div>
  );
};

export default BoardPacman;
