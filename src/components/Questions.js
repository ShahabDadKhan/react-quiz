import React from "react";
import Options from "./Options";

export default function Questions({ dispatch, question, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options dispatch={dispatch} question={question} answer={answer} />
    </div>
  );
}
