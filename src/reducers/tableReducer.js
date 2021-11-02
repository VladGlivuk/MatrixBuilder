import { SET_IS_TABLE_VISIBLE } from "./types"

export const defaultState = {
  isTableVisible: false
}

export default function tableReducer (state = defaultState, action) {
  switch (action.type) {
    case SET_IS_TABLE_VISIBLE:
      return {
        ...state,
        isTableVisible: action.payload 
      }

    default: 
      return state
  }
}

export const setIsTableVisible = (isTableVisible) => ({type:SET_IS_TABLE_VISIBLE, payload:isTableVisible})