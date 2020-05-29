import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BoardGhost from './components/BoardGhost/index';
import BoardPacman from './components/BoardPacman/index';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
