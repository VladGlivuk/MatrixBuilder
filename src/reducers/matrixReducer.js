import { SET_MATRIX } from "./types"

export const defaultState = {
  globalMatrix: []
}

export default function matrixReducer (state = defaultState, action) {
  switch (action.type) {
    case SET_MATRIX:
      return {
        ...state,
        globalMatrix: action.payload 
      }

    default: 
      return state
  }
}

export const setMatrix = (globalMatrix) => ({type:SET_MATRIX, payload:globalMatrix})