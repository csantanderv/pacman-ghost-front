import React, { FC } from 'react';
import { GhostPosition } from '../Types';
import './style.scss';

type AttackProps = {
  positionX: number;
  positionY: number;
  close: boolean;
  onClick(position: GhostPosition): void;
};

const Attack: FC<AttackProps> = (props: AttackProps) => {
  const { positionX, positionY, onClick, close } = props;
  const handleClick = () => {
    onClick({ positionX: positionX, positionY: positionY });
  };

  return close ? (
    <div className='attack-close'></div>
  ) : (
    <div className='attack'>
      <div className='attack-img' onClick={handleClick}></div>
    </div>
  );
};

export default Attack;
