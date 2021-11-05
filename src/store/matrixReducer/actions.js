import { SET_MATRIX } from "../action-types";

export const setMatrix = (settings) => ({
  type: SET_MATRIX,
  payload: settings,
});
