import { ADD_TO_CART } from "./type";

export const cartData = (initialData = [], action) => {
  // console.warn(action);
  // if (action.type === ADD_TO_CART) {
  //   console.warn("this from reducer", action);
  //   return action.data;
  // } else {
  //   return "Not action match";
  // }

  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART condition", action);
      return [action.initialData, ...initialData];
    default:
      return initialData;
    // return "Not action match";
  }
};
