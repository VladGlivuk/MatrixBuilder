import { SET_ROWS } from "./types"
import { SET_CELLS } from "./types"
import { SET_COLUMNS } from "./types"
 
export const defaultState = {
  columns: 0,
  rows: 0,
  cells: 0
}

export default function parametersReducer (state = defaultState, action) {
  switch (action.type) {
    case SET_COLUMNS:
      return {
        ...state,
        columns: action.payload 
      }
    case SET_ROWS:
      return {
        ...state,
        rows: action.payload
      }
    case SET_CELLS:
      return {
        ...state,
        cells: action.payload
      }
    default: 
      return state
  }
}

export const setColumns = (columns) => ({type:SET_COLUMNS, payload:columns})
export const setRows = (rows) => ({type:SET_ROWS, payload:rows})
export const setCells = (cells) => ({type:SET_CELLS, payload:cells})