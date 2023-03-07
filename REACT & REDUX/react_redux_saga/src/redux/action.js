import { ADD_TO_CART, REMOVE_FROM_CART } from "./type";

export const AddToCart = (data) => {
  console.warn("action called");
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromChart = (data) => {
  console.warn("action called");
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const deleteFromChart = (data) => {
  console.warn("action called");
  return {
    type: EMPTY_FROM_CART,
    data,
  };
};
