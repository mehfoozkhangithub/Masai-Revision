import React from "react";
import { useDispatch } from "react-redux";
import Header from "./header";
import { AddToCart, removeFromChart } from "../redux/action";
import "../App.css";
function Main() {
  const dispatch = useDispatch(); // here we defined for the send data to action file.

  //! this is stand for as a payload data //
  const product = {
    name: "I Phone",
    price: "150K",
    color: "red",
    type: "Mobile",
  };
  return (
    <>
      <Header />
      {/* here we pass the data which we create upper name is product */}
      <button onClick={() => dispatch(AddToCart(product))}>Add To Cart</button>
      <button onClick={() => dispatch(removeFromChart(product))}>
        Remove To Cart
      </button>
      <button onClick={() => dispatch(deleteFromChart(product))}>
        Empty To Cart
      </button>
    </>
  );
}

export default Main;
//  11:46  video seen after we have to seeing
