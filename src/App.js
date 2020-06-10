import React, { useState } from "react";
import "./myStyle.css";
import Piaic from "./Piaic";
export function App() {
  let [count, setCount] = useState(0);
  let [isDay, setDay] = useState(true);

  return (
    <div className={`Box${isDay ? 1 : 2}`}>
      <h1>Hello from Mateen Mustafa</h1>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(--count);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setDay(!isDay);
        }}
      >
        Change isDay
      </button>
      <Piaic count={count}></Piaic>
    </div>
  );
}
