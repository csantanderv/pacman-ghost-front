import React from 'react';
import GhostField from '../GhostField';
import PacmanHouse from '../PacmanHouse';
import './style.scss';

const BoardPacman = () => {
  return (
    <div className='board'>
      <PacmanHouse />
      <GhostField />
    </div>
  );
};

export default BoardPacman;
