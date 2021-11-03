import { combineReducers } from "redux";
import { createStore } from "redux";
import tableReducer from "./tableReducer";
import parametersReducer from "./parametersReducer";

const rootReducer = combineReducers({
  table: tableReducer,
  parameters: parametersReducer
})

export const store = createStore(rootReducer)