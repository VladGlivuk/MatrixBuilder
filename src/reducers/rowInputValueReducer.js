import { SET_INPUT_ROW_VALUE } from "./types"

export const defaultState = {
  inputRowValue: 0
}

export default function rowInputValueReducer (state = defaultState, action) {
  switch (action.type) {
    case SET_INPUT_ROW_VALUE:
      return {
        ...state,
        inputRowValue: action.payload 
      }

    default: 
      return state
  }
}

export const setInputRowValue = (inputRowValue) => ({type:SET_INPUT_ROW_VALUE, payload:inputRowValue})