import React, { useState } from "react";
const App = () => {
  let [name, setname] = useState("mateen");
  let [age, setAge] = useState(1);
  return (
    <div>
      <h1>Hi {name}</h1>

      <h1>AGE = {age}</h1>
      <button
        onClick={() => {
          setAge(++age);
        }}
      >
        I.A
      </button>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          setAge(--age);
        }}
      >
        D.A
      </button>
    </div>
  );
};
export default App;
