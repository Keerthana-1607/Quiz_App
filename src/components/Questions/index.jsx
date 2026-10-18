import { useState, useEffect } from "react";
import Data from "./data";
import "./index.css";

function Questions() {
  const [idx, setIdx] = useState(0);
  const [time, setTime] = useState(10);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const question = Data[idx];

  // Timer
  useEffect(() => {
    if (quizEnd || selected !== null) return;

    if (time === 0) {
      nextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, selected, quizEnd]);

  // Next question
  function nextQuestion() {
    if (idx === Data.length - 1) {
      setQuizEnd(true);
    } else {
      setIdx(idx + 1);
      setTime(10);
      setSelected(null);
    }
  }

  // Select answer
  function handleSelect(key) {
    setSelected(key);

    if (key === question.answer) {
      setScore(score + 1);
    }

    setTimeout(nextQuestion, 1000);
  }

  // Restart quiz
  function restartQuiz() {
    setIdx(0);
    setTime(10);
    setSelected(null);
    setScore(0);
    setQuizEnd(false);
  }

  // Result screen
  if (quizEnd) {
    return (
      <div className="quiz-container">
        <h1>Quiz Completed!</h1>
        <h2>Your Score: {score} / {Data.length}</h2>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  // Question screen
  return (
    <div className="quiz-container">
      <h2>Time Left: {time}s</h2>

      <h3>
        {question.id}. {question.question}
      </h3>

      {Object.entries(question.options).map(([key, value]) => {
        let answerClass = "options-btn";

        if (selected !== null && key === question.answer) {
          answerClass += " correct";
        } else if (selected === key) {
          answerClass += " wrong";
        }

        return (
          <button
            key={key}
            className={answerClass}
            disabled={selected !== null}
            onClick={() => handleSelect(key)}
          >
            {key}. {value}
          </button>
        );
      })}
    </div>
  );
}

export default Questions;
