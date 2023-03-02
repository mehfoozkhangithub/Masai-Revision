import { ADD_TO_CART } from "./type";

export const cartData = (initialData = [], action) => {
  console.warn(action);
  if (action.type === ADD_TO_CART) {
    console.warn("this from reducer", action);
    return action.data;
  } else {
    return "Not action match";
  }
};
