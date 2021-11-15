import { combineReducers } from "redux";
import { createStore } from "redux";
import matrixReducer from "./matrixReducer/reducer";

const rootReducer = combineReducers({
  matrix: matrixReducer,
});

const store = createStore(rootReducer);

export type IStore = ReturnType<typeof rootReducer>;
export default store;
