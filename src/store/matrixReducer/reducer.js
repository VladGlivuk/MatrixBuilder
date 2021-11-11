import { nanoid } from "nanoid";
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
      const initMatrixWithRows = [];
      for (let i = 0; i < rows; i++) {
        initMatrixWithRows.push([]);
      }
      const createdMatrix = initMatrixWithRows.map((rowArr) => {
        const arrWithValues = [...rowArr];
        for (let i = 0; i < columns; i++) {
          arrWithValues.push({
            id: nanoid(),
            value: Math.floor(Math.random() * (999 - 100 + 1) + 100),
          });
        }
        return {
          records: arrWithValues,
          sum: arrWithValues.reduce((acc, curr) => acc + curr.value, 0),
        };
      });

      return {
        ...state,
        globalMatrix: createdMatrix,
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
      const newRow = [];

      for (let i = 0; i < state.settings.columns; i++) {
        newRow.push({
          id: nanoid(),
          value: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        });
      }
      return {
        ...state,
        globalMatrix: [
          ...state.globalMatrix,
          {
            records: newRow,
            sum: newRow.reduce((acc, curr) => acc + curr.value, 0),
          },
        ],
      };
    }

    case INCREMENT: {
      const newMatrix = state.globalMatrix.map((row) =>
        row.records.map((cell) =>
          cell.id === payload ? { ...cell, value: cell.value + 1 } : cell
        )
      );

      return {
        ...state,
        globalMatrix: newMatrix.map((row) => ({
          sum: row.reduce((acc, curr) => acc + curr.value, 0),
          records: row,
        })),
      };
    }

    case FIND_CLOSEST_CELL_BY_VALUE: {
      const allValues = state.globalMatrix
        .map((el) => el.records)
        .flat()
        .filter((el) => el.id !== payload.id)
        .sort(
          (a, b) =>
            Math.abs(payload.value - a.value) -
            Math.abs(payload.value - b.value)
        );

      const closestCells = allValues.slice(0, state.settings.cells);
      console.log(closestCells, payload);

      return {
        ...state,
        closestCells,
      };
    }

    case ON_MOUSE_LEAVE_CELL: {
      const reloadClosestCells = false;
      
      return {
        ...state,
        closestCells: reloadClosestCells
      }
    }

    default:
      return state;
  }
};

export default matrixReducer;
