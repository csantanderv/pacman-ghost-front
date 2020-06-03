import React, { FC } from 'react';
import { Config } from '../../config';
import useShowGhost from '../../hooks/useShowGhost';
import GhostImg from '../GhostImg';
import './style.scss';
import { saveGhost } from '../../store/Actions';
import { useDispatch } from 'react-redux';

const Ghost: FC = () => {
  const { showGhost, position, killGhost } = useShowGhost();
  const dispatch = useDispatch();

  const handleClick = () => {
    killGhost();
    dispatch(saveGhost(position));
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
        <GhostImg />
      </div>
    </div>
  ) : null;

  return ghost;
};

export default Ghost;
