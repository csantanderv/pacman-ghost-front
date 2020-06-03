import React from 'react';
import Ghost from '../Ghost';
import { GhostPosition } from '../Types';
import './style.scss';
import { useDispatch } from 'react-redux';
import { saveGhost } from '../../store/Actions';

const GhostField = () => {
  return (
    <div className='ghost-field'>
      <div className='ghost-list'>
        <Ghost />
      </div>
    </div>
  );
};

export default GhostField;
