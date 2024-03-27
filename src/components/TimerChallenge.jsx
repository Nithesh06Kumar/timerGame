import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
  //   const [timerStart, setTimerStart] = useState(false);
  //   const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerRef = useRef(null);
  const dialogRef = useRef(null);

  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timerRef.current);
    dialogRef.current.open();
  }
  const handleOnReset = () => {
    setTimeRemaining(targetTime * 1000);
  };
  const handleTimerStart = () => {
    // setTimerStart(true);
    // setTimerExpired(false);
    // timerRef.current = setTimeout(() => {
    //   setTimerExpired(true);
    //   dialogRef.current.open();
    // }, targetTime * 1000);
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  };
  const handleTimerStop = () => {
    clearInterval(timerRef.current);
    dialogRef.current.open();
  };
  return (
    <>
      <ResultModal
        remainTime={timeRemaining}
        targettime={targetTime}
        ref={dialogRef}
        onReset={handleOnReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleTimerStop : handleTimerStart}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running.." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
