import React from "react";

export default function Options({ dispatch, question, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered && index === question.correctOption
              ? "correct"
              : "wrong"
          } ${
            index !== question.correctOption && index === answer
              ? "wrongAnswer"
              : ""
          }`}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
