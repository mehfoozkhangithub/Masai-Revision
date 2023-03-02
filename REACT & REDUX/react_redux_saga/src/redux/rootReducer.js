import { combineReducers } from "redux";
import { cartData } from "./reducer";

// ? combineReducer is use form merge row reducer state at  a same time as a redux-thunk of flux.

export default combineReducers({
  cartData, //* here we have our data come form reducer we can give here multi-reducer data;
});

// ! after there we pass the data from store which we create first to store our data init.
