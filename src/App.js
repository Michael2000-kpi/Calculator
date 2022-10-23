import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <nav
        style={{
          background: "#333",
        }}
      >
        <ul>
          <li>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
          </li>
          <li>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
          </li>
        </ul>
      </nav>
      <div
        style={{
          textAlign: "center",
          background: "#455",
        }}
      >
        <p>Count {counter}</p>
      </div>
    </>
  );
}

export default App;
