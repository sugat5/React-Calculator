import { useState } from "react";
import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

function Calculator() {
  const [result, setResult] = useState("");
  const clickHandler = (e) => {
    setResult(result.concat(e.target.value));
  };
  const equal = () => {
    setResult(eval(result).toString());
  };
  const clearInput = () => {
    setResult(result.slice(0, -1));
  };
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "black",
        border: "7px solid",
        padding: "6px"
      }}
    >
      <div>
        <input type="text" value={result} style={{ fontSize: "18px" }} />
        <br />
      </div>
      <div>
        <button type="text" value="0" onClick={clickHandler}>
          0
        </button>
        <button type="text" value="9" onClick={clickHandler}>
          9
        </button>
        <button type="text" value="8" onClick={clickHandler}>
          8
        </button>
      </div>
      <div>
        <button type="text" value="7" onClick={clickHandler}>
          7
        </button>
        <button type="text" value="6" onClick={clickHandler}>
          6
        </button>
        <button type="text" value="5" onClick={clickHandler}>
          5
        </button>
      </div>
      <div>
        <button type="text" value="4" onClick={clickHandler}>
          4
        </button>
        <button type="text" value="3" onClick={clickHandler}>
          3
        </button>
        <button type="text" value="2" onClick={clickHandler}>
          2
        </button>
      </div>
      <div>
        <button type="text" value="1" onClick={clickHandler}>
          1
        </button>
        <button type="text" value="*" onClick={clickHandler}>
          x
        </button>
        <button type="text" value="" onClick={equal}>
          =
        </button>
      </div>
      <div>
        <button type="text" value="+" onClick={clickHandler}>
          +
        </button>
        <button type="text" value="/" onClick={clickHandler}>
          /
        </button>
        <button type="text" onClick={clearInput}>
          C
        </button>
      </div>
    </div>
  );
}
