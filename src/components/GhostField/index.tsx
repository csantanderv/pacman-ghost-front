import React, { useEffect, useState } from 'react';
import Ghost from '../Ghost';
import './style.scss';
import { useSocket } from '../../hooks/useSocket';
import { EventTypes } from '../../config';

const GhostField = () => {
  const [socket, errorSocket] = useSocket();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (socket !== null) {
      socket.on(EventTypes.SendGhost, (data: any) => {
        setPosition(data);
      });
    }
  }, [socket]);

  return (
    <div className='ghost-field'>
      <div className='ghost-list'>
        <Ghost {...position} onClick={() => {}} showGhost={true} />
      </div>
    </div>
  );
};

export default GhostField;
