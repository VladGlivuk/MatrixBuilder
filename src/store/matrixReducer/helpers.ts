import { IMatrixReducer } from "./types";

export const initialState: IMatrixReducer = {
  globalMatrix: [],
  settings: { rows: 0, columns: 0, cells: 0 },
  closestCells: [],
};