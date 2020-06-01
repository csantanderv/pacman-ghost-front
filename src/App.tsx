import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BoardGhost from './components/BoardGhost/index';
import BoardPacman from './components/BoardPacman/index';
import { useSocket } from './hooks/useSocket';
import { SocketContext } from './context/SocketContext';
import './App.css';

function App() {
  const [socket, errorSocket] = useSocket();

  useEffect(() => {
    if (errorSocket !== '') {
      alert('Error al conectarse al socket');
    }
  }, [errorSocket]);

  return socket ? (
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
  ) : null;
}

export default App;
