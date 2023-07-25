import { useRef } from "react";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [progress, setProgress] = useState(10);
  const timer = useRef();
  useEffect(() => {
    timer.current = setInterval(function () {
      setProgress((prev) => prev + 10);
    }, 1000);
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  useEffect(() => {
    if (progress === 100) {
      clearInterval(timer.current);
    }
  }, [progress]);
  return (
    <>
      <h2>Progress Bar</h2>
      <div id="progress-bar">
        <div
          id="inner-bar"
          style={{ transform: `translateX(calc(${progress - 100}%))` }}
        ></div>
      </div>
    </>
  );
}

export default App;
