import React, { useState, useEffect } from 'react';

const CountdownButtons = () => {
  const [count, setCount] = useState(3);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (running && count > 0) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (count === 0) {
      clearInterval(interval);
      setRunning(false);
    }

    return () => clearInterval(interval);
  }, [running, count]);

  const handleStart = () => {
    setCount(3);
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleRestart = () => {
    setCount(3);
    setRunning(true);
  };

  return (
    <div>
      <div>{count > 0 && running && <p>{count}</p>}</div>
      <button onClick={handleStart}>Commencez</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default CountdownButtons;