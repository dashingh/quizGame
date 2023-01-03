export interface TriviaCategoriesDTO {
  trivia_categories: {
    id: number;
    name: string;
  }[];
}

export interface InterfaceFormData {
  amount: number;
  category: number;
  difficulty: string;
  type: string;
}
export interface InterfaceQuiz {
  response_code: number;
  results: Result[];
}

export interface Result {
  category: string;
  type: Type;
  difficulty: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export enum Difficulty {
  Easy = "easy",
  Hard = "hard",
  Medium = "medium",
}

export enum Type {
  Multiple = "multiple",
}
