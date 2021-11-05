import { DELETE_ROW, SET_MATRIX } from "../action-types";

export const setMatrix = (settings) => ({
  type: SET_MATRIX,
  payload: settings,
});

export const deleteRow = (index) => ({
  type: DELETE_ROW,
  payload: index,
});
