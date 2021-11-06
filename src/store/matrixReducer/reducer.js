import { nanoid } from "nanoid";
import { ADD_ROW, DELETE_ROW, SET_MATRIX } from "../action-types";

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
        for (let i = 0; i < columns; i++) {
          rowArr.push({
            id: nanoid(),
            value: Math.floor(Math.random() * (999 - 100 + 1) + 100),
          });
        }
        return rowArr;
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
        globalMatrix: [...state.globalMatrix, newRow],
      };
    }
    default:
      return state;
  }
};

export default matrixReducer;
