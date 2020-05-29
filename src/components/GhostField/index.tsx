import React from 'react';
import Ghost from '../Ghost';
import './style.scss';

const GhostField = () => {
  return (
    <div className='ghost-field'>
      <div className='ghost-list'>
        <Ghost
          positionX={6}
          positionY={2}
          onClick={() => {}}
          showGhost={true}
        />
      </div>
    </div>
  );
};

export default GhostField;
