import React, { FC, useState, useEffect, useContext } from 'react';
import Ghost1Img from '../../assets/ghost-1.svg';
import { Config, EventTypes } from '../../config';
import { GhostPosition } from '../Types';
import { ContextSocket, SocketContext } from '../../context/SocketContext';
import './style.scss';
import useShowGost from '../../hooks/useShowGhost';

type GhostProps = {
  onClick(position: GhostPosition): void;
};

const Ghost: FC<GhostProps> = (props: GhostProps) => {
  const { showGhost, position, killGhost } = useShowGost();

  const handleClick = () => {
    killGhost();
  };

  const ghost = showGhost ? (
    <div
      className='ghost'
      style={{
        top: position.positionY * Config.ghostSize,
        left: position.positionX * Config.ghostSize,
      }}
      onClick={handleClick}
    >
      <div className='ghost-img'>
        <img src={Ghost1Img}></img>
      </div>
    </div>
  ) : null;

  return ghost;
};

export default Ghost;
