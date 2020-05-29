import React from 'react';
import Ghost1Img from '../../assets/ghost-1.svg';
import './style.scss';

const Ghost = () => {
  return (
    <div className='ghost' style={{ top: 100 }}>
      <div className='ghost-img'>
        <img src={Ghost1Img}></img>
      </div>
    </div>
  );
};

export default Ghost;
