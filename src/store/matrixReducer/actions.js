import {
  ADD_ROW,
  DELETE_ROW,
  FIND_CLOSEST_CELL_BY_VALUE,
  INCREMENT,
  ON_MOUSE_LEAVE_CELL,
  SET_MATRIX,
} from "../action-types";

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

export const findTheClosestCellByValue = (cell) => ({
  type: FIND_CLOSEST_CELL_BY_VALUE,
  payload: cell,
});

export const onMouseLeaveCell = (cell) => ({
  type: ON_MOUSE_LEAVE_CELL,
  payload: cell,
});
