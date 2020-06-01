import React, { FC, useState, useEffect, useContext } from 'react';
import Ghost1Img from '../../assets/ghost-1.svg';
import { Config, EventTypes } from '../../config';
import { GhostPosition } from '../Types';
import { useSocket } from '../../hooks/useSocket';
import './style.scss';
import { ContextSocket, SocketContext } from '../../context/SocketContext';

type GhostProps = {
  onClick(position: GhostPosition): void;
};

const Ghost: FC<GhostProps> = (props: GhostProps) => {
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

  const handleClick = () => {
    if (socket) {
      socket.emit(EventTypes.KillGhost, position);
    }
  };

  const ghost = showGhost ? (
    <div
      className='ghost'
      style={{
        top: position.positionY * Config.ghostSize,
        left: position.positionX * Config.ghostSize,
      }}
      onClick={handleClick}
    >
      <div className='ghost-img'>
        <img src={Ghost1Img}></img>
      </div>
    </div>
  ) : null;

  return ghost;
};

export default Ghost;
