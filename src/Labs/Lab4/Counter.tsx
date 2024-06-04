import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state" className="container mt-3">
      <h2>Counter: {count}</h2>
      <button
        className="btn btn-success text-white me-2"
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click">
        Up
      </button>
      <button
        className="btn btn-danger text-white"
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click">
        Down
      </button>
      <hr/>
    </div>
  );
}
