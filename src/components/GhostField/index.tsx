import React from 'react';
import Ghost from '../Ghost';
import './style.scss';

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
