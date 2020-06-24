import React, { useState, useEffect } from 'react';
import Attack from '../Attack';
import { GhostPosition } from '../Types';
import useAttack from '../../hooks/useAttack';
import useDestroyAttack from '../../hooks/useDestroyAttack';
import { addCounter } from '../../store/Actions';
import { useDispatch } from 'react-redux';
import './style.scss';

const AttackField = () => {
  const { isAttacking, setAttack } = useAttack();
  const { attackDestroyed, destroy } = useDestroyAttack();
  const [destroyed, setDestroyed] = useState<GhostPosition[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (attackDestroyed) {
      setDestroyed([...destroyed, attackDestroyed]);
      destroy();
      dispatch(addCounter());
    }
  }, [attackDestroyed, destroyed, destroy, dispatch]);

  const handleClickAttack = (position: GhostPosition) => {
    if (setAttack && !isAttacking) {
      setAttack(position);
    }
  };

  const attacks = [];
  let count = 0;
  for (let y = 0; y <= 8; y++) {
    for (let x = 0; x <= 6; x++) {
      const indexClosed = destroyed.findIndex(
        (item) => item.positionX === x && item.positionY === y,
      );
      attacks.push(
        <Attack
          key={count}
          position={{ positionX: x, positionY: y }}
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
