import React, { useState, useEffect } from 'react';
import Attack from '../Attack';
import { GhostPosition } from '../Types';
import useAttack from '../../hooks/useAttack';
import useCloseAttack from '../../hooks/useCloseAttack';
import { addCounter } from '../../store/Actions';
import { useDispatch } from 'react-redux';
import './style.scss';
import { Config } from '../../config';

const AttackField = () => {
  const { isAttacking, setAttack } = useAttack();
  const { closeAttack, setClosed } = useCloseAttack();
  const [closedAttacks, setClosedAttacks] = useState<GhostPosition[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (closeAttack) {
      setClosedAttacks([...closedAttacks, closeAttack]);
      setClosed();
      dispatch(addCounter());
    }
  }, [closeAttack]);

  const handleClickAttack = (position: GhostPosition) => {
    if (setAttack && !isAttacking) {
      setAttack(position);
    }
  };
  const attacks = [];
  let count = 0;
  for (let y = 0; y <= 8; y++) {
    for (let x = 0; x <= 6; x++) {
      const indexClosed = closedAttacks.findIndex(
        (item) => item.positionX === x && item.positionY === y,
      );
      attacks.push(
        <Attack
          key={count}
          positionX={x}
          positionY={y}
          onClick={handleClickAttack}
          close={indexClosed !== -1}
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
