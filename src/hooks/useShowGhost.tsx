import { useEffect, useState, useContext } from 'react';
import { EventTypes, Config } from '../config';
import { ContextSocket, SocketContext } from '../context/SocketContext';
import { GhostPosition } from '../components/Types';

const useShowGhost = () => {
  const socketContext = useContext<ContextSocket>(SocketContext);
  const { socket } = socketContext;
  const [showGhost, setShowGhost] = useState(false);
  const [idTimeOut, setIdTimeout] = useState();
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
    if (showGhost) {
      const t = setTimeout(() => {
        setShowGhost(false);
      }, Config.ghostTime);
      setIdTimeout(t);
    }
  }, [showGhost]);

  const killGhost = () => {
    if (socket) {
      socket.emit(EventTypes.KillGhost, position);
      clearTimeout(idTimeOut);
      setShowGhost(false);
    }
  };

  return { showGhost, position, killGhost };
};

export default useShowGhost;
