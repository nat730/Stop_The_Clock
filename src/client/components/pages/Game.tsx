import { useEffect, useState } from 'react';
import '../../App.css';

function Chrono() {
  const [targetNumber, setTargetNumber] = useState<number>(Math.floor(Math.random() * 10) + 1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [topScores, setTopScores] = useState<number[]>([]);

  useEffect(() => {
    const storedTopScores = localStorage.getItem('topScores');
    if (storedTopScores) {
      setTopScores(JSON.parse(storedTopScores));
    }
  }, []);

  const startStopGame = () => {
    if (!isRunning) {
      setTargetNumber(Math.floor(Math.random() * 10) + 1);
      setStartTime(Date.now());
    } else {
      const endTime = Date.now();
      const timeDifference = Math.abs(targetNumber * 1000 - (endTime - startTime));
      const timeDifferenceInSec = timeDifference / 1000
      let updatedTopScores: number[]

      if (topScores.length === 0) {
        updatedTopScores = [timeDifferenceInSec];
      } else {
        const tab =  [...topScores, timeDifferenceInSec]
        tab.sort((a, b) => a - b)
        updatedTopScores = tab.slice(0, 3);
      }
      localStorage.setItem('topScores', JSON.stringify(updatedTopScores));
      setTopScores(updatedTopScores);
      setElapsedTime((endTime - startTime) / 1000);
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

    if (!isRunning && elapsedTime > 0) {
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
      {!isRunning && elapsedTime > 0 && <p>Temps écoulé: {elapsedTime} secondes</p>}
      {!isRunning && elapsedTime > 0 && <p>{getMessage()}</p>}
      <p>Top 3 Scores:</p>
      <ul>
        {topScores.map((score, index) => (
          <p key={index}> {index + 1}. {score} secondes</p>
        ))}
      </ul>
      <button onClick={startStopGame}>{isRunning ? 'Arrêter' : 'Démarrer'}</button>
      {!isRunning && elapsedTime > 0 && <button onClick={resetGame}>Réinitialiser</button>}
    </div>
  );
}

export default Chrono;
