import { questions, tests, answers } from "../../../shared/mock/tests";

import type {
  Answer,
  Category,
  Difficulty,
  Question,
  Test,
  TestGroup,
} from "../../../shared/types/test";

const DIFFICULTY_ORDER: Difficulty[] = ["easy", "medium", "hard"];

export type CategoryItem = {
  title: string;
  slug: string;
};

export const getCategories = (): CategoryItem[] => {
  const bySlug = new Map<string, CategoryItem>();

  for (const t of tests) {
    if (!bySlug.has(t.categorySlug)) {
      bySlug.set(t.categorySlug, { title: t.category, slug: t.categorySlug });
    }
  }

  return Array.from(bySlug.values());
};

export const getTestsByCategory = (category: Category): Test[] => {
  return tests.filter((test) => test.category === category);
};

export const getTestById = (testId: number): Test | null => {
  return tests.find((test) => test.id === testId) || null;
};

export const getTestGroup = (joinId: string): TestGroup | null => {
  const testList: Test[] = [];

  for (let i = 0; i < tests.length; i++) {
    if (tests[i].joinId === joinId) {
      testList.push(tests[i]);
    }
  }

  if (testList.length === 0) return null;

  const title = testList[0].title;
  const category = testList[0].category;

  const testIdByDifficulty: Partial<Record<Difficulty, number>> = {};

  for (const test of testList) {
    testIdByDifficulty[test.difficulty] = test.id;
  }

  const availableDifficulties: Difficulty[] = DIFFICULTY_ORDER.filter(
    (difficulty) => difficulty in testIdByDifficulty,
  );

  return {
    joinId,
    title,
    category,
    testIdByDifficulty,
    availableDifficulties,
  };
};

export const getQuestionsByTestId = (testId: number): Question[] => {
  const test = tests.find((t) => t.id === testId);
  if (!test) return [];

  const questionById = new Map<number, Question>();
  for (const q of questions) {
    questionById.set(q.id, q);
  }

  const result: Question[] = [];
  for (const questionId of test.questionIds) {
    const q = questionById.get(questionId);
    if (q) result.push(q);
  }

  return result;
};

export const getTestGroupsByCategory = (category: Category): TestGroup[] => {
  const seen = new Set<string>();
  const result: TestGroup[] = [];

  for (const t of tests) {
    if (t.category !== category) continue;
    if (seen.has(t.joinId)) continue;

    seen.add(t.joinId);

    const group = getTestGroup(t.joinId);
    if (group) result.push(group);
  }

  return result;
};

export const getTestGroupsByCategorySlug = (slug: string): TestGroup[] => {
  const filtredTests = tests.filter((test) => test.categorySlug === slug);

  const seen = new Set<string>();
  const result: TestGroup[] = [];

  for (const t of filtredTests) {
    if (seen.has(t.joinId)) continue;

    seen.add(t.joinId);

    const group = getTestGroup(t.joinId);
    if (group) result.push(group);
  }

  return result;
};

export const getAnswersByQuestionId = (questionId: number): Answer[] => {
  return answers.filter((answer) => answer.questionId === questionId);
};
