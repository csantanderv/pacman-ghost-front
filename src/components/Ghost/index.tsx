import React, { FC } from 'react';
import Ghost1Img from '../../assets/ghost-1.svg';
import { Config } from '../../config';
import { GhostPosition } from '../Types';
import useShowGhost from '../../hooks/useShowGhost';
import './style.scss';

type GhostProps = {
  onClick(position: GhostPosition): void;
};

const Ghost: FC<GhostProps> = (props: GhostProps) => {
  const { onClick } = props;
  const { showGhost, position, killGhost } = useShowGhost();

  const handleClick = () => {
    killGhost();
    onClick(position);
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
