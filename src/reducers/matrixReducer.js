import { SET_MATRIX } from "./types"

export const defaultState = {
  matrix: []
}

export default function matrixReducer (state = defaultState, action) {
  switch (action.type) {
    case SET_MATRIX:
      return {
        ...state,
        matrix: action.payload 
      }

    default: 
      return state
  }
}

export const setMatrix = (matrix) => ({type:SET_MATRIX, payload:matrix})