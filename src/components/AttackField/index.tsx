import React, { useEffect } from 'react';
import './style.scss';
import Attack, { Position } from '../Attack';
import { useSocket } from '../../hooks/useSocket';
import { EventTypes } from '../../config';

const AttackField = () => {
  const [socket, errorSocket] = useSocket();
  const attacks = [];
  let count = 0;

  useEffect(() => {
    if (errorSocket !== '') {
      alert('Error al conectarse al socket');
    }
  }, [errorSocket]);

  const handleClickAttack = (position: Position) => {
    if (socket) {
      socket.emit(EventTypes.SendAttack, position);
    }
  };

  for (let y = 0; y <= 8; y++) {
    for (let x = 0; x <= 6; x++) {
      attacks.push(
        <Attack
          key={count}
          positionX={x}
          positionY={y}
          onClick={handleClickAttack}
        />,
      );
      count += 1;
    }
  }

  return (
    <div className='attack-field'>
      <div className='attack-list'>{attacks}</div>
    </div>
  );
};

export default AttackField;
