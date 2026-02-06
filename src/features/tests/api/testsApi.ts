import type {
  Answer,
  Category,
  Question,
  Test,
} from "../../../shared/types/test";

export const getCategories = (tests: Test[]): Category[] => {
  const categories = new Set<Category>();
  tests.forEach((test) => {
    categories.add(test.category);
  });
  return Array.from(categories);
};

export const getTestsByCategory = (
  category: Category,
  tests: Test[],
): Test[] => {
  return tests.filter((test) => test.category === category);
};

export const getTestById = (testId: number, tests: Test[]): Test | null => {
  return tests.find((test) => test.id === testId) || null;
};

export const getQuestionsByTestId = (
  testId: number,
  questions: Question[],
): Question[] => {
  return questions.filter((question) => question.testId === testId);
};

export const getAnswersByQuestionId = (
  questionId: number,
  answers: Answer[],
): Answer[] => {
  return answers.filter((answer) => answer.questionId === questionId);
};
