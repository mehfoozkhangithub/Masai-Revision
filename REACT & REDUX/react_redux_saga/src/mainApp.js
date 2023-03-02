import React from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "./redux/action";
function MainApp() {
  const dispatch = useDispatch(); // here we defined for the send data to action file.

  //! this is stand for as a payload
  const product = {
    name: "I Phone",
    price: "150K",
    color: "red",
    type: "Mobile",
  };
  return (
    <>
      {/* here we pass the data which we create upper name is product */}
      <button onClick={() => dispatch(AddToCart(product))}>Add To Cart</button>
    </>
  );
}

export default MainApp;
//  11:46  video seen after we have to seeing
