import { GhostPosition } from '../components/Types';
import { ADD_COUNTER, SAVE_GHOST } from './Types';

export interface SaveGhostInterface {
  type: string;
  position: GhostPosition;
}

export const addCounter = (): { type: string } => ({
  type: ADD_COUNTER,
});

export const saveGhost = (position: GhostPosition): SaveGhostInterface => ({
  type: SAVE_GHOST,
  position,
});
