import { useEffect, useState, useContext } from 'react';
import { EventTypes } from '../config';
import { ContextSocket, SocketContext } from '../context/SocketContext';
import { GhostPosition } from '../components/Types';

const useDestroyAttack = () => {
  const socketContext = useContext<ContextSocket>(SocketContext);
  const { socket } = socketContext;
  const [attackDestroyed, setAttackDestroyed] = useState<GhostPosition | null>(
    null,
  );

  useEffect(() => {
    if (socket) {
      socket.on(EventTypes.DestroyAttack, (position: GhostPosition) => {
        setAttackDestroyed(position);
      });
    }
  }, [socket]);

  const destroy = () => {
    setAttackDestroyed(null);
  };

  return { attackDestroyed, destroy };
};

export default useDestroyAttack;
