import { useEffect, useState, useContext } from 'react';
import { EventTypes } from '../config';
import { GhostPosition } from '../components/Types';
import { ContextSocket, SocketContext } from '../context/SocketContext';

const useAttack = () => {
  const socketContext = useContext<ContextSocket>(SocketContext);
  const { socket } = socketContext;
  const [isAttacking, setIsAttacking] = useState(false);
  const [errorAttacking, setErrorAttacking] = useState('');

  useEffect(() => {
    if (socket) {
      socket.on(EventTypes.AttackSended, () => {
        setIsAttacking(false);
      });
    }
  }, [socket]);

  const setAttack = (position: GhostPosition) => {
    if (socket) {
      try {
        setIsAttacking(true);
        socket.emit(EventTypes.SendAttack, position);
      } catch (error) {
        setIsAttacking(false);
        setErrorAttacking('Ocurrió un error al realizar al ataque');
      }
    }
  };

  return { isAttacking, errorAttacking, setAttack };
};

export default useAttack;
