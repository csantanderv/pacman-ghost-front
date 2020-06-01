import React, { useEffect, useState, useContext } from 'react';
import { EventTypes, Config } from '../config';
import { ContextSocket, SocketContext } from '../context/SocketContext';
import { GhostPosition } from '../components/Types';

const useShowGost = () => {
  const socketContext = useContext<ContextSocket>(SocketContext);
  const { socket } = socketContext;
  const [showGhost, setShowGhost] = useState(false);
  const [position, setPosition] = useState<GhostPosition>({
    positionX: 0,
    positionY: 0,
  });

  useEffect(() => {
    if (socket !== null) {
      socket.on(EventTypes.ShowGhost, (data: any) => {
        setPosition(data);
        setShowGhost(true);
      });
    }
  }, [socket]);

  useEffect(() => {
    setTimeout(() => {
      setShowGhost(false);
    }, Config.ghostTime);
    return () => {
      clearTimeout();
    };
  }, [showGhost]);

  const killGhost = () => {
    if (socket) {
      socket.emit(EventTypes.KillGhost, position);
      setShowGhost(false);
      clearTimeout();
    }
  };

  return { showGhost, position, killGhost };
};

export default useShowGost;
