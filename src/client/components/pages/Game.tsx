import React, { useState } from 'react';
import '../../App.css';

function Chrono() {
  const [targetNumber, setTargetNumber] = useState<number>(Math.floor(Math.random() * 10) + 1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  const startStopGame = () => {
    if (!isRunning) {
      setStartTime(Date.now());
    } else {
      const endTime = Date.now();
      const timeDifference = endTime - startTime;
      setElapsedTime(timeDifference / 1000);
    }
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetGame = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setTargetNumber(Math.floor(Math.random() * 10) + 1);
  };

  const getMessage = () => {
    const difference = elapsedTime - targetNumber;

    if (!isRunning) {
      if (difference === 0) {
        return <p>Vous avez parfaitement atteint le nombre, bravo !</p>;
      } else if (difference > -1 && difference < 1) {
        return <p>Vous avez presque atteint l'objectif, bravo !</p>;
      } else if (difference !== 0) {
        return <p>Dommage, réessaye la prochaine fois</p>;
      }
    }
  };

  return (
    <div className="App">
      <h1>Arrêtez le Chronomètre</h1>
      <p>Nombre cible: {targetNumber}</p>
      {!isRunning && <p>Temps écoulé: {elapsedTime} secondes</p>}
      {getMessage()}
      <button onClick={startStopGame}>{isRunning ? 'Arrêter' : 'Démarrer'}</button>
      <button onClick={resetGame}>Réinitialiser</button>
    </div>
  );
}

export default Chrono;