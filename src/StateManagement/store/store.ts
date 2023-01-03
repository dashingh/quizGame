import { createContext } from "react";
import { InterfaceQuiz, TriviaCategoriesDTO } from "../../utils/interface";

export interface StateInterface {
  triviaCategories: TriviaCategoriesDTO;
  setTriviaCategories?: (value: TriviaCategoriesDTO) => void;

  triviaQuizDTO: InterfaceQuiz;
  setTriviaQuizDTO?: (value: InterfaceQuiz) => void;

  score: number;
  setScore?: (value: number) => void;
}

export const defaultState: StateInterface = {
  triviaCategories: {
    trivia_categories: [
      {
        id: 0,
        name: "",
      },
    ],
  },
  triviaQuizDTO: {
    response_code: 0,
    results: [],
  },
  score:0
};

export const Store = createContext<StateInterface>(defaultState);
