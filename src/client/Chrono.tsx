import { useState, useEffect } from 'react';
import './App.css';

function Chrono() {
  const [targetNumber, setTargetNumber] = useState<number>(Math.floor(Math.random() * 10) + 1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
  
    if (isRunning) {
      setElapsedTime(0);
      let startTime = Date.now();
  
      interval = setInterval(() => {
        setElapsedTime((Date.now() - startTime) / 1000);
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
    setTargetNumber(Math.floor(Math.random() * 10) + 1);
  };

  let difference = elapsedTime - targetNumber;

  return (
    <div className="App">
      <h1>Arrêtez le Chronomètre</h1>
      <p>Nombre cible: {targetNumber}</p>
      {!isRunning && <p>Temps écoulé: {elapsedTime} secondes</p>}
      {!isRunning && difference === 0 && <p>Vous avez parfaitement atteint le nombre, bravo !</p>}
      {(!isRunning && difference > -1 && difference < 1 && difference !== 0) && <p>Vous avez presque atteint l'objectif, bravo !</p>}
      {(!isRunning && (difference <= -1 || difference >= 1) && difference !== 0) && <p>dommage réesssaye la prochaine fois</p>}
      <button onClick={startStopGame}>{isRunning ? 'Arrêter' : 'Démarrer'}</button>
      <button onClick={resetGame}>Réinitialiser</button>
    </div>
  );
}

export default Chrono;
