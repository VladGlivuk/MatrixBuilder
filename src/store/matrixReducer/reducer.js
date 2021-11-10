import { nanoid } from "nanoid";
import { ADD_ROW, DELETE_ROW, INCREMENT, SET_MATRIX } from "../action-types";

const initialState = {
  globalMatrix: [],
  settings: { rows: 0, columns: 0, cells: 0 },
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
          { records: newRow, sum: newRow.reduce((acc, curr) => acc + curr.value, 0) },
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

    default:
      return state;
  }
};

export default matrixReducer;
