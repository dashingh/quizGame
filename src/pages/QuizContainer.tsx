import React, { useEffect, useState } from "react";
import { useStore } from "../Hooks/useStore";
import { decode } from "html-entities";
import Quiz from "./Quiz";

const QuizContainer = () => {
  const {
    score,
    triviaQuizDTO: { results },
  } = useStore();
  const [quizPos, setQuizPos] = useState<number>(0);
  const [listOfQuestion, setListOfQuestion] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");

  let currentQuiz = results[quizPos];

  const shuffleQuestion = () => {
    let randomNumber = Math.floor(Math.random() * currentQuiz?.incorrect_answers.length + 1);
    let incorrect = currentQuiz?.incorrect_answers.filter((a) => a !== currentQuiz?.correct_answer);
    let correct = currentQuiz?.correct_answer;
    incorrect.splice(randomNumber, 0, correct);
    // console.log("🚀incorrect After", incorrect)
    setListOfQuestion(incorrect);
  };

  useEffect(() => {
    if (results.length > 0) {
      shuffleQuestion();
    }
  }, [quizPos, results]);

  return (
    <div className="flex flex-col gap-3 md:gap-4 bg-white p-6 shadow-md rounded-md mx-auto w-[320px]  md:w-1/2">
      {results.length > 0 && (
        <>
          <div className="font-thin flex justify-between flex-col md:flex-row">
            <h2 className="text-sm md:text-base">Category: {currentQuiz.category}</h2>
            <div className="text-sm md:text-base">
              Current Score: {score}/{quizPos}
            </div>
          </div>
          <hr />
          <div className="font-semibold text-1xl md:text-2xl  ">{decode(currentQuiz.question)}</div>
          <div className="flex flex-col">
            <Quiz
              listOfQuestion={listOfQuestion}
              setQuizPos={setQuizPos}
              quizPos={quizPos}
              currentQuiz={currentQuiz}
              currentQuestion={quizPos}
              correctAnswer={currentQuiz.correct_answer}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default QuizContainer;
