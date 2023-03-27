import { combineReducers } from "redux";
import { operationsReducer } from "./todoApp/reducer/operation";

export const rootReducer = combineReducers({
  operationsReducer,
  //! more reducer can be add here
});
