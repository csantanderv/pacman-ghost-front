import React, { FC } from 'react';
import Pacman from '../Pacman/index';
import Eaten from '../Eaten';
import './style.scss';

const PacmanHouse: FC = () => {
  return (
    <div className='pacman-house'>
      <Pacman />
      <Eaten />
    </div>
  );
};

export default PacmanHouse;
