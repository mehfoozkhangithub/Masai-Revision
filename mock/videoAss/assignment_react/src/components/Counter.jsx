import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleClick = () => {
    if (count === 10) {
      setDirection(-1);
    } else if (count === 0) {
      setDirection(1);
    }
    setCount(count + direction);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Count</button>
    </div>
  );
}

export default Counter;
