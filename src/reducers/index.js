import { combineReducers } from "redux";
import { createStore } from "redux";
import tableReducer from "./tableReducer";
import parametersReducer from "./parametersReducer";
import matrixReducer from "./matrixReducer"

const rootReducer = combineReducers({
  table: tableReducer,
  parameters: parametersReducer,
  matrixReducer: matrixReducer
})

export const store = createStore(rootReducer)