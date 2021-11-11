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

const initialState = {
  globalMatrix: [],
  settings: { rows: 0, columns: 0, cells: 0 },
  closestCells: [],
};

const matrixReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MATRIX: {
      const { rows, columns } = payload;

      return {
        ...state,
        globalMatrix: createMatrix(rows, columns),
        settings: payload,
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
          row.records.map((cell) =>
            cell.id === payload ? { ...cell, value: cell.value + 1 } : cell
          )
        )
        .map((row) => ({
          sum: row.reduce((acc, curr) => acc + curr.value, 0),
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
          payload,
          state.settings.cells
        ),
      };
    }

    case ON_MOUSE_LEAVE_CELL: {
      const reloadClosestCells = false;

      return {
        ...state,
        closestCells: reloadClosestCells,
      };
    }

    default:
      return state;
  }
};

export default matrixReducer;
