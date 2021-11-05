import { nanoid } from "nanoid";
import { SET_MATRIX } from "../action-types";

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

    default:
      return state;
  }
};

export default matrixReducer;
