import React from 'react';
import './style.scss';
import Pacman from '../Pacman/index';
import Eaten from '../Eaten';

const PacmanHouse = () => {
  return (
    <div className='pacman-house'>
      <Pacman />
      <Eaten />
    </div>
  );
};

export default PacmanHouse;
