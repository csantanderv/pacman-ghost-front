import React, { useEffect, useState, useContext } from 'react';
import { EventTypes } from '../config';
import { ContextSocket, SocketContext } from '../context/SocketContext';
import { GhostPosition } from '../components/Types';

const useCloseAttack = () => {
  const socketContext = useContext<ContextSocket>(SocketContext);
  const { socket } = socketContext;
  const [closeAttack, setCloseAttack] = useState<GhostPosition | null>(null);

  useEffect(() => {
    if (socket !== null) {
      socket.on(EventTypes.CloseAttack, (data: any) => {
        setCloseAttack(data);
      });
    }
  }, [socket]);

  const setClosed = () => {
    setCloseAttack(null);
  };

  return { closeAttack, setClosed };
};

export default useCloseAttack;
