import { ActionType, Cell, IMatrixReducer, Settings } from "./types";
import {
  createMatrix,
  createNewRow,
  getClosestCells,
} from "../../core/functions";
import {
  ADD_ROW,
  DELETE_ROW,
  FIND_CLOSEST_CELL_BY_VALUE,
  INCREMENT,
  ON_MOUSE_LEAVE_CELL,
  SET_MATRIX,
} from "../action-types";

const initialState: IMatrixReducer = {
  globalMatrix: [],
  settings: { rows: 0, columns: 0, cells: 0 },
  closestCells: [],
};

const matrixReducer = (
  state = initialState,
  action: ActionType
): IMatrixReducer => {
  const { type, payload } = action;

  switch (type) {
    case SET_MATRIX: {
      const { rows, columns } = payload as Settings;

      return {
        ...state,
        globalMatrix: createMatrix(rows, columns),
        settings: payload as Settings,
      };
    }

    case DELETE_ROW:
      return {
        ...state,
        globalMatrix: state.globalMatrix.filter(
          (_row, index) => index !== payload
        ),
      };

    case ADD_ROW: {
      const newRowRecords = createNewRow(state.settings.columns);
      const newRow = {
        records: newRowRecords,
        sum: newRowRecords.reduce((acc, curr) => acc + curr.value, 0),
      };

      return {
        ...state,
        globalMatrix: [...state.globalMatrix, newRow],
      };
    }

    case INCREMENT: {
      const newMatrix = state.globalMatrix
        .map((row) =>
          row.records.map((cell: Cell) =>
            cell.id === payload ? { ...cell, value: cell.value + 1 } : cell
          )
        )
        .map((row) => ({
          sum: row.reduce((acc: number, curr: Cell) => acc + curr.value, 0),
          records: row,
        }));

      return {
        ...state,
        globalMatrix: newMatrix,
      };
    }

    case FIND_CLOSEST_CELL_BY_VALUE: {
      return {
        ...state,
        closestCells: getClosestCells(
          state.globalMatrix,
          payload as Cell,
          state.settings.cells
        ),
      };
    }

    case ON_MOUSE_LEAVE_CELL: {
      return {
        ...state,
        closestCells: [],
      };
    }

    default:
      return state;
  }
};

export default matrixReducer;
