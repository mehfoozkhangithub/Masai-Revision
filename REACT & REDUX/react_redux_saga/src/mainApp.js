import React from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "./redux/action";
function MainApp() {
  const dispatch = useDispatch();
  return (
    <>
      <button>Add To Cart</button>
    </>
  );
}

export default MainApp;
//  11:46  video seen after we have to seeing
