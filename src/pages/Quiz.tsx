import { decode } from "html-entities";
import React, { Dispatch, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import Hr from "../components/UI/Hr";
import useHandleBack from "../Hooks/useHandleBack";
import { useStore } from "../Hooks/useStore";
import { Result } from "../utils/interface";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Item from "./Item";

const Quiz = ({ listOfQuestion, currentQuestion, correctAnswer, quizPos, setQuizPos, currentQuiz }: interfaceQuiz) => {
  const [selected, setSelected] = useState<string>("");
  const {
    setScore,
    score,
    triviaQuizDTO: { results },
  } = useStore();
  const navigate = useNavigate();

  const { setIsDirty, isDirty } = useHandleBack("Changes you made may not be saved.");

  const handleSelect = (i: string) => {
    if (selected === i && selected !== currentQuiz.correct_answer) {
      return "bg-orange text-white cursor-not-allowed";
    } else if (i === currentQuiz.correct_answer) {
      return "bg-green text-white cursor-not-allowed";
    } else {
      return "bg-slate-200 text-black  cursor-not-allowed  hover:shadow-md hover:text-white hover:bg-slate-400";
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
    } else {
      setIsDirty(true);
    }
  }, [quizPos]);

  return (
    <>
      <AnimateSharedLayout>
        <motion.div className="flex flex-col mb-4" layout>
          <AnimatePresence>
            {listOfQuestion.map((option, i) => {
              return (
                <Item key={i} handleCheck={handleCheck} handleSelect={handleSelect} option={option} selected={selected} i={i} />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </AnimateSharedLayout>
      <Hr />
      <div className="flex flex-col mt-6">
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
