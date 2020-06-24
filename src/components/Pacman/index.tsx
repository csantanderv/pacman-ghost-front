import React, { FC } from 'react';
import PacmanImg from '../../assets/pacman.svg';
import './style.scss';

const Pacman: FC = () => {
  return (
    <div className='pacman'>
      <div className='pacman-img'>
        <img src={PacmanImg} alt='Pacman'></img>
      </div>
    </div>
  );
};

export default Pacman;
