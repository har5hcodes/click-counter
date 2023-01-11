import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const incrementHandler = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const decrementHandler = () => {
    if (number === 0) {
      return;
    }
    setNumber((prevNumber) => prevNumber - 1);
  };
  const resetHandler = () => {
    setNumber(0);
  };
  return (
    <>
      <div id="container">
        <div>
          <p>{number}</p>
        </div>
        <div >
          <button className="transparent" onClick={incrementHandler}>Increment</button>
          <button className="transparent" onClick={decrementHandler}>Decrement</button>
          <button className="transparent" onClick={resetHandler}>Reset Count</button>
        </div>
      </div>
    </>
  );
}

export default App;
