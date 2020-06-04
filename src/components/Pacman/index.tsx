import React from 'react';
import PacmanImg from '../../assets/pacman.svg';
import './style.scss';

const Pacman = () => {
  return (
    <div className='pacman'>
      <div className='pacman-img'>
        <img src={PacmanImg} alt='Pacman'></img>
      </div>
    </div>
  );
};

export default Pacman;
