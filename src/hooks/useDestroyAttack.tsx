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
    if (socket !== null) {
      socket.on(EventTypes.DestroyAttack, (data: any) => {
        setAttackDestroyed(data);
      });
    }
  }, [socket]);

  const destroy = () => {
    setAttackDestroyed(null);
  };

  return { attackDestroyed, destroy };
};

export default useDestroyAttack;
