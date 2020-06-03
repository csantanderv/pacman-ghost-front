import React, { useEffect } from 'react';
import './App.css';
import configureStore from './store/Store';
import GamePacVsGhost from './GamePacVsGhost';

function App() {
  const { store } = configureStore({});

  return store ? <GamePacVsGhost store={store} /> : null;
}

export default App;
