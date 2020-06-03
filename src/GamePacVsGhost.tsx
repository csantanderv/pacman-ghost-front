import React, { useEffect, FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BoardGhost from './components/BoardGhost/index';
import BoardPacman from './components/BoardPacman/index';
import { useSocket } from './hooks/useSocket';
import { SocketContext } from './context/SocketContext';
import { Provider } from 'react-redux';
import './App.css';

type GamePacVsGhostProps = {
  store: any;
};

const GamePacVsGhost: FC<GamePacVsGhostProps> = (
  props: GamePacVsGhostProps,
) => {
  const [socket, errorSocket] = useSocket();

  useEffect(() => {
    if (errorSocket !== '') {
      alert('Error al conectarse al socket');
    }
  }, [errorSocket]);

  return socket ? (
    <Provider store={props.store}>
      <SocketContext.Provider value={{ socket }}>
        <Router>
          <div>
            <Switch>
              <Route path='/ghost'>
                <BoardGhost />
              </Route>
              <Route path='/pacman'>
                <BoardPacman />
              </Route>
            </Switch>
          </div>
        </Router>
      </SocketContext.Provider>
    </Provider>
  ) : null;
};

export default GamePacVsGhost;
