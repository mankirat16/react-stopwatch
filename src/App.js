// import './App.css';
// import React from 'react';
// import Watch from './Watch';
// function App() {
//   return (
//     <div className="App">
//       <h1 id="head">Stopwatch</h1>
//       <Watch/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Watch from "./Watch";

function App() {
  const [counter, setCounter] = React.useState(0);
  function CounterSet() {
    setCounter(counter + 1);
  }
  return (
    <div className="counter">
      <Watch/>
    </div>
  );
}

export default App;
