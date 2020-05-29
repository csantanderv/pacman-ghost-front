import React, { FC } from 'react';
import Ghost1Img from '../../assets/ghost-1.svg';
import './style.scss';

type GhostProps = {
  positionX: number;
  positionY: number;
  onClick(): void;
  showGhost: boolean;
};

const GhostSize = 40;

const Ghost: FC<GhostProps> = (props: GhostProps) => {
  const { positionX, positionY, showGhost } = props;

  const styleGhost = {
    top: positionY * GhostSize,
    left: positionX * GhostSize,
  };

  return showGhost ? (
    <div className='ghost' style={styleGhost}>
      <div className='ghost-img'>
        <img src={Ghost1Img}></img>
      </div>
    </div>
  ) : null;
};

export default Ghost;
