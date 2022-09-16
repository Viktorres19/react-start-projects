import React from "react";

const Game = ({ step, question, onClickVariant, questions }) => {
  const percentage = Math.round(step / questions.length * 100);
  console.log(percentage);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage.toString()}%` }} className="progress__inner"></div>
      </div>
      <h2>{question.title}</h2>
      <ul>
        {
          question.variants.map((variant, index) =>
            <li onClick={() => onClickVariant(index)} key={index}>{variant}</li>)
        }
      </ul>
    </>
  );
}

export default Game;