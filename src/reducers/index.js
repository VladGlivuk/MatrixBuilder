import { combineReducers } from "redux";
import { createStore } from "redux";
import tableReducer from "./tableReducer";
import parametersReducer from "./parametersReducer";
import rowInputValueReducer from "./rowInputValueReducer";

const rootReducer = combineReducers({
  table: tableReducer,
  parameters: parametersReducer,
  rowInputValueReducer: rowInputValueReducer
})

export const store = createStore(rootReducer)