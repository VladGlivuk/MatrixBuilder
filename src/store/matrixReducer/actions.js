import { ADD_ROW, DELETE_ROW, INCREMENT, SET_MATRIX } from "../action-types";

export const setMatrix = (settings) => ({
  type: SET_MATRIX,
  payload: settings,
});

export const deleteRow = (index) => ({
  type: DELETE_ROW,
  payload: index,
});

export const addRow = () => ({
  type: ADD_ROW,
});

export const increment = (id) => ({
  type: INCREMENT,
  payload: id,
});
