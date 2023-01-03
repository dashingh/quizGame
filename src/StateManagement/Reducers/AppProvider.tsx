import React, { ReactNode, useCallback, useContext, useReducer } from "react";
import { InterfaceQuiz, TriviaCategoriesDTO } from "../../utils/interface";
import { Store } from "../store/store";
import { ActionTypes } from "./action-types";
import { reducer } from "./reducer";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const stateContext = useContext(Store);
  const [storeState, dispatch] = useReducer(reducer, stateContext);

  const setTriviaCategories = useCallback((state: TriviaCategoriesDTO) => {
    dispatch({ type: ActionTypes.TRIVIA_CATEGORIES, payload: state });
  }, []);

  const setTriviaQuizDTO = useCallback((state: InterfaceQuiz) => {
    dispatch({ type: ActionTypes.TRIVIA_QUIZ, payload: state });
  }, []);

  const setScore = useCallback((state: number) => {
    dispatch({ type: ActionTypes.SCORE, payload: state });
  }, []);

  const providerProps = {
    ...storeState,
    setTriviaCategories,
    setTriviaQuizDTO,
    setScore
  };
  return <Store.Provider value={providerProps}>{children}</Store.Provider>;
};

export default AppProvider;
