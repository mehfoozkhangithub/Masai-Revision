import { ADD_TO_CART } from "./type";

export const AddToCart = (data) => {
  console.warn("action called");
  return {
    type: ADD_TO_CART,
    data,
  };
};
