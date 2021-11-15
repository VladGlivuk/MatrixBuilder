import {
  ADD_ROW,
  DELETE_ROW,
  FIND_CLOSEST_CELL_BY_VALUE,
  INCREMENT,
  ON_MOUSE_LEAVE_CELL,
  SET_MATRIX,
} from "../action-types";

import { Cell, Settings } from "./types";

export const setMatrix = (settings: Settings) => ({
  type: SET_MATRIX,
  payload: settings,
});

export const deleteRow = (index: number) => ({
  type: DELETE_ROW,
  payload: index,
});

export const addRow = () => ({
  type: ADD_ROW,
});

export const increment = (id: string) => ({
  type: INCREMENT,
  payload: id,
});

export const findTheClosestCellByValue = (cell: Cell) => ({
  type: FIND_CLOSEST_CELL_BY_VALUE,
  payload: cell,
});

export const onMouseLeaveCell = (cell: Cell) => ({
  type: ON_MOUSE_LEAVE_CELL,
  payload: cell,
});
