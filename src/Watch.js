import React from "react";

function Watch() {
  const [prev, setTime] = React.useState({ hh: 0, mm: 0, ss: 0 });
  const [interval, setIntervalId] = React.useState(null);
  var updatedH = prev.hh;
  var updatedM = prev.mm;
  var updatedS = prev.ss;

  
  function run() {
    if (updatedS > 59) {
      updatedM++;
      updatedS = 0;
      if (updatedM > 59) {
        updatedH++;
        updatedM = 0;
      }
    }

    updatedS++;
    return setTime((prev) => ({
      ...prev,
      hh: updatedH,
      mm: updatedM,
      ss: updatedS,
    }));

  
}

  function start() {
    if(interval===null){
      const intervaln = setInterval(() => {
        run();
      }, 1000);
      setIntervalId(intervaln);
    }
  }

  function stop() {
    clearInterval(interval);
    setIntervalId(null);
  }
  function reset() {
    clearInterval(interval);
    setIntervalId(null);
    setTime((prev) => ({
      ...prev,
      hh: 0,
      mm: 0,
      ss: 0,
    }));
  }

  return (
    <div>
      <h2>
        {prev.hh >= 10 ? prev.hh : "0" + prev.hh} :{" "}
        {prev.mm >= 10 ? prev.mm : "0" + prev.mm} :{" "}
        {prev.ss >= 10 ? prev.ss : "0" + prev.ss}
      </h2>
      <br></br>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Watch;
