export type Category =
  | "JavaScript"
  | "CSS"
  | "HTML"
  | "Git"
  | "API"
  | "Алгоритмы";

export type Difficulty = "easy" | "medium" | "hard";

export type Test = {
  id: number;
  title: string;
  category: Category;
  categorySlug: string;
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

export type TestGroup = {
  joinId: string;
  title: string;
  category: Category;
  testIdByDifficulty: Partial<Record<Difficulty, number>>;
  availableDifficulties: Difficulty[];
};
