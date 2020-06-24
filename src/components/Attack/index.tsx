import React, { FC } from 'react';
import { GhostPosition } from '../Types';
import './style.scss';

type AttackProps = {
  position: GhostPosition;
  close: boolean;
  onClick(position: GhostPosition): void;
};

const Attack: FC<AttackProps> = (props: AttackProps) => {
  const { position, onClick, close } = props;

  const handleClick = () => {
    onClick(position);
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
