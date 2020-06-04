import React from 'react';
import configureStore from './store/Store';
import GamePacVsGhost from './GamePacVsGhost';
import './App.css';

function App() {
  const { store } = configureStore({});
  return store ? <GamePacVsGhost store={store} /> : null;
}

export default App;
