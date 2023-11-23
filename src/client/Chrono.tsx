import { useState, useEffect } from 'react';
import './App.css';

function Chrono() {
  const [targetNumber, setTargetNumber] = useState<number>(Math.floor(Math.random() * 10) + 1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => { 
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopGame = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetGame = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setTargetNumber(Math.floor(Math.random() * 20) + 1);
  };

  return (
    <div className="App">
      <h1>Stop Chrono</h1>
      <p>Nombre cible: {targetNumber}</p>
      <p>Temps écoulé: {elapsedTime} secondes</p>
      <button onClick={startStopGame}>{isRunning ? 'Arrêter' : 'Démarrer'}</button>
      <button onClick={resetGame}>Réinitialiser</button>
    </div>
  );
}

export default Chrono;
