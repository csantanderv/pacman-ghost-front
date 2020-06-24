import React, { FC } from 'react';
import Ghost from '../Ghost';
import './style.scss';

const DinningField: FC = () => {
  return (
    <div className='ghost-field'>
      <div className='ghost-list'>
        <Ghost />
      </div>
    </div>
  );
};

export default DinningField;
