import {
  ADD_ROW,
  DELETE_ROW,
  FIND_CLOSEST_CELL_BY_VALUE,
  INCREMENT,
  ON_MOUSE_LEAVE_CELL,
  SET_MATRIX,
} from "./../action-types";
export type Settings = {
  rows: number;
  columns: number;
  cells: number;
};

export type Cell = {
  value: number;
  id: string;
};

export type MatrixRow = {
  records: Array<Cell>;
  sum: number;
};

export interface IMatrixReducer {
  globalMatrix: Array<MatrixRow>;
  settings: Settings;
  closestCells: Array<Cell>;
}

type SetMatrix = {
  type: typeof SET_MATRIX;
  payload: Settings;
};

type DeleteRow = {
  type: typeof DELETE_ROW;
  payload: number;
};

type AddRow = {
  type: typeof ADD_ROW;
  payload: undefined;
};

type Increment = {
  type: typeof INCREMENT;
  payload: string;
};

type FindClosestCellByValue = {
  type: typeof FIND_CLOSEST_CELL_BY_VALUE;
  payload: Cell;
};

type OnMouseLeaveCell = {
  type: typeof ON_MOUSE_LEAVE_CELL;
  payload: Cell;
};

export type ActionType =
  | SetMatrix
  | DeleteRow
  | AddRow
  | Increment
  | FindClosestCellByValue
  | OnMouseLeaveCell;
