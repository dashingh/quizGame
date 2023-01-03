import { InterfaceQuiz, TriviaCategoriesDTO } from "../../../utils/interface";
import { ActionTypes } from "../action-types";

interface GetCategoryAction {
  type: ActionTypes.TRIVIA_CATEGORIES;
  payload: TriviaCategoriesDTO;
}

interface GetTriviaQuizDtoAction {
  type: ActionTypes.TRIVIA_QUIZ;
  payload: InterfaceQuiz;
}

interface GetScoreAction {
  type: ActionTypes.SCORE;
  payload: number;
}

export type Action = GetCategoryAction | GetTriviaQuizDtoAction | GetScoreAction;