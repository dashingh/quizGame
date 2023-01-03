import { decode } from "html-entities";
import React, { Dispatch, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import useHandleBack from "../Hooks/useHandleBack";
import { useStore } from "../Hooks/useStore";
import { Result } from "../utils/interface";

const Quiz = ({ listOfQuestion, currentQuestion, correctAnswer, quizPos, setQuizPos, currentQuiz }: interfaceQuiz) => {
  const [selected, setSelected] = useState<string>("");
  const {
    setScore,
    score,
    triviaQuizDTO: { results },
  } = useStore();
  const navigate = useNavigate();

  const { setIsDirty, isDirty } = useHandleBack(
    "Changes you made may not be saved."
  );

  const handleSelect = (i: string) => {
    if (selected === i && selected !== currentQuiz.correct_answer) {
      return "bg-orange text-white pointer-events-none";
    } else if (i === currentQuiz.correct_answer) {
      return "bg-green text-white pointer-events-none";
    } else {
      return "bg-slate-200 text-black pointer-events-none cursor-pointer hover:shadow-md hover:text-white hover:bg-slate-400";
    }
  };

  const handleCheck = (i: string) => {
    setSelected(i);

    if (i === currentQuiz.correct_answer) setScore?.(score + 1);
  };

  const handleNext = () => {
    if (results.length === quizPos + 1) {
      navigate("/final");
    }
    setQuizPos(quizPos + 1);
    setSelected("");
  };

  useEffect(() => {
    if (results.length === quizPos + 1) {
        setIsDirty(false);
      }else{
          setIsDirty(true);
      }
  },[quizPos])



  return (
    <>
      <div className="flex flex-col mb-4">
        {listOfQuestion.map((option, i) => {
          return (
            <button
              onClick={() => handleCheck(option)}
              key={i}
              disabled={!!selected}
              className={
                selected
                  ? `${handleSelect(option)} my-2 flex w-full transition-all text-left text-sm md:text-base  rounded-md py-2 px-3 cursor-pointer `
                  : `my-2 flex w-full bg-slate-200 text-black text-left text-sm md:text-base transition-all  rounded-md py-2 px-3 cursor-pointer hover:shadow-md hover:shadow-2`
              }
            >
              {decode(option)}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col">
        <Button buttonText={"Next"} buttonClasses={"bg-yellow text-white"} disabled={!selected} onClick={handleNext} />
      </div>
    </>
  );
};

interface interfaceQuiz {
  listOfQuestion: string[];
  currentQuestion: number;
  correctAnswer: string;
  currentQuiz: Result;
  setQuizPos: Dispatch<React.SetStateAction<number>>;
  quizPos: number;
}

export default Quiz;
