import React, { useEffect } from "react";

export default function Timer({ secondsRemaining, dispatch }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(function () {
      //   console.log("tick");
      dispatch({ type: "tick" });
    }, 1000);

    // Unmounted
    return () => {
      clearInterval(id);
      console.log("unmounted");
    };
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}: {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
