import React, { FC } from 'react';
import DinningField from '../DinningField';
import PacmanHouse from '../PacmanHouse';
import './style.scss';

const BoardPacman: FC = () => {
  return (
    <div className='board'>
      <PacmanHouse />
      <DinningField />
    </div>
  );
};

export default BoardPacman;
