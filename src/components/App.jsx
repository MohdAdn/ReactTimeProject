import React, { useState } from "react";

function App() {
  setInterval(newTime, 1000);

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function newTime() {
    const nowTime = new Date().toLocaleTimeString();
    setTime(nowTime);
  }

  return (
    <div className="container">
      <p>{time}</p>
      <button onClick={newTime}>Get Time</button>
    </div>
  );
}

export default App;
