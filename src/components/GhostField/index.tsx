import React, { FC } from 'react';
import Ghost from '../Ghost';
import './style.scss';

const GhostField: FC = () => {
  return (
    <div className='ghost-field'>
      <div className='ghost-list'>
        <Ghost />
      </div>
    </div>
  );
};

export default GhostField;
