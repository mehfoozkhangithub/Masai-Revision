// here we are create the store
import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;

// this is our store we have take the value from rootReducer
