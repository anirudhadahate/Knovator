import React from "react";
import "./Timer.css";
import { useState } from "react";

const formatTime = (timer) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

const Timer = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume } =
    useTimer(0);

  return (
    <div className="timer">
      <h3 style={{ textAlign: "center" }}>React Stopwatch</h3>
      <div className="stopwatch-card">
        <p>{formatTime(timer)}</p>
        <div className="buttons">
          <button onClick={handleResume}>Resume</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleStart}>start</button>
          <button>
            <a href="adddata">save</a>
          </button>
        </div>
      </div>
    </div>
  );
};

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = React.useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  return {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  };
};

const timer = () => {
  return (
    <>
      <Timer time={formatTime(timer)} />
    </>
  );
};

export default timer;
