import React, { FC } from 'react';
import Ghost1Img from '../../assets/ghost-1.svg';
import './style.scss';

export type Position = { positionX: number; positionY: number };

type AttackProps = {
  positionX: number;
  positionY: number;
  onClick(position: Position): void;
};

const Attack: FC<AttackProps> = (props: AttackProps) => {
  const { positionX, positionY, onClick } = props;
  const handleClick = () => {
    onClick({ positionX: positionX, positionY: positionY });
  };

  return (
    <div className='attack'>
      <div className='attack-img' onClick={handleClick}></div>
    </div>
  );
};

export default Attack;
