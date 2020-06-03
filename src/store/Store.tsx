import { createStore, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import GameSaga from '../sagas/GameSaga';
import reducer from './Reducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState: any) {
  const middlewares: Middleware[] = [sagaMiddleware];
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares),
  );
  sagaMiddleware.run(GameSaga);
  return { store };
}
