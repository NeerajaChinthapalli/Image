// import './App.css';
// import MousePointer from './components/classComponent/MousePointer';
// //import ClassComponent from './components/classComponent/ClassComponent';
// // import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
// function App() {

  
//   return (
//     <div className='App'>
//       <MousePointer/>
//       {/* <ClassComponent/> */}
//     {/* <FunctionalComponent/> */}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameRunning, setGameRunning] = useState(true);

  useEffect(() => {
    if (gameRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameRunning(false);
    }
  }, [gameRunning, timeLeft]);

  const handleImageClick = () => {
    if (gameRunning) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleTopClick = () => {
    if (gameRunning) {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameRunning(true);
  };

  return (
    <div className="App">
      <h1>Click the Image Game</h1>
      <p>Click on the image to increase the score. Reduce the time by clicking at the top of the image.</p>
      <p>Score: {score}</p>
      <p>Time Left: {timeLeft} seconds</p>
      <div className="image-container">
        <img src="https://m.media-amazon.com/images/M/MV5BMTY2NGRlZTgtZWU1ZC00NzhkLTgyMmYtYTQyZDgzYmE0ZmYzXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg" alt="Click Me!" width="300" height="200" onClick={handleImageClick} />
        <div className="top-click-area" onClick={handleTopClick}></div>
      </div>
      {!gameRunning && <p>Game Over! Your Score: {score}</p>}
      <button onClick={restartGame} disabled={gameRunning}>Restart Game</button>
    </div>
  );
}

export default App;