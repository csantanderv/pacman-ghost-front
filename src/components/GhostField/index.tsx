import React, { useEffect, useState } from 'react';
import Ghost from '../Ghost';
import './style.scss';
import { useSocket } from '../../hooks/useSocket';
import { EventTypes } from '../../config';
import { GhostPosition } from '../Types';

const GhostField = () => {
  const handleClick = (position: GhostPosition) => {};

  return (
    <div className='ghost-field'>
      <div className='ghost-list'>
        <Ghost onClick={handleClick} />
      </div>
    </div>
  );
};

export default GhostField;
