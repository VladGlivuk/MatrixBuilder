import { combineReducers } from "redux";
import { createStore } from "redux";
import matrixReducer from "./matrixReducer/reducer";

const store = combineReducers({
  matrix: matrixReducer,
});

export default createStore(store);
