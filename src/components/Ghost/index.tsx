import React, { FC, useState, useEffect } from 'react';
import Ghost1Img from '../../assets/ghost-1.svg';
import './style.scss';

type GhostProps = {
  positionX: number;
  positionY: number;
  onClick(): void;
};

const GhostSize = 40;

const Ghost: FC<GhostProps> = (props: GhostProps) => {
  const { positionX, positionY } = props;
  const [showGhost, setShowGhost] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowGhost(false);
    }, 300);
  });

  useEffect(() => {
    setShowGhost(true);
  }, [positionY, positionX]);

  const handleClick = () => {
    alert(positionX + ' ' + positionY);
  };

  const styleGhost = {
    top: positionY * GhostSize,
    left: positionX * GhostSize,
  };

  return showGhost ? (
    <div className='ghost' style={styleGhost} onClick={handleClick}>
      <div className='ghost-img'>
        <img src={Ghost1Img}></img>
      </div>
    </div>
  ) : null;
};

export default Ghost;
