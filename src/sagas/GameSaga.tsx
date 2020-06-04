import { put, takeEvery } from 'redux-saga/effects';
import { SAVE_GHOST } from '../store/Types';
import { SaveGhostInterface, addCounter } from '../store/Actions';
import { GhostPosition } from '../components/Types';
import ApiClient from '../api/ApiClient';

const saveGhost = async (position: GhostPosition): Promise<{}> => {
  const response = await ApiClient().post('save-ghost', position);
  return response.data;
};

function* saveGhostSaga(action: SaveGhostInterface) {
  try {
    if (action.position) {
      saveGhost(action.position);
    }
    yield put(addCounter());
  } catch (error) {
    console.log(error);
  }
}

export default function* watchSaveGhost() {
  yield takeEvery(SAVE_GHOST, saveGhostSaga);
}
