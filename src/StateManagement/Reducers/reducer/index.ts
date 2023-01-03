import { StateInterface } from "../../store/store";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export const reducer = (state: StateInterface, action: Action): StateInterface => {
  switch (action.type) {
    case ActionTypes.TRIVIA_CATEGORIES: {
      return {
        ...state,
        triviaCategories: action.payload,
      };
    }
    case ActionTypes.TRIVIA_QUIZ: {
      return {
        ...state,
        triviaQuizDTO: action.payload,
      };
    }
    case ActionTypes.SCORE: {
      return {
        ...state,
        score: action.payload,
      };
    }

    default:
      return state;
  }
};
