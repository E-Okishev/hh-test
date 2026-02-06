export type Category = string;

export type Difficulty = "easy" | "medium" | "hard";

export type Test = {
  id: number;
  title: string;
  category: Category;
  joinId: string;
  difficulty: Difficulty;
  questionIds: number[];
};

export type Question = {
  id: number;
  testId: number;
  text: string;
  answerIds: number[];
  explanation: string;
};

export type Answer = {
  id: number;
  questionId: number;
  text: string;
  isCorrect: boolean;
};
