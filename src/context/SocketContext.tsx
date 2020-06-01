import React from 'react';

const initialSocket = {
  socket: null,
};

export type ContextSocket = {
  socket: SocketIOClient.Socket | null;
};

export const SocketContext = React.createContext<ContextSocket>(initialSocket);
