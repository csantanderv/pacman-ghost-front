import { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { Config } from '../config/';

export const useSocket = (): [SocketIOClient.Socket | null, string] => {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (socket === null) {
      try {
        const socket = socketIOClient(Config.urlSocket + '/gameEvents', {
          forceNew: true,
        });
        setSocket(socket);
      } catch (error) {
        setError('Ocurrió un error al conectarse al servidor del juego');
      }
    }
  }, [socket]);

  return [socket, error];
};
