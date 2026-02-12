import { useMemo, useState } from "react";
import type { Category, Difficulty, TestGroup } from "../../shared/types/test";
import { useNavigate } from "react-router-dom";

import { CategoryList } from "./CategoryList";
import { TestGroupCard } from "./TestGroupCard";
import { Button } from "../../entities/Components/Button/button";
import {
  getCategories,
  getTestGroupsByCategory,
} from "../../features/tests/api/testsApi";

export const TestsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [testGroups, setTestGroups] = useState<TestGroup[]>([]);
  const [selectedDifficultyByJoinId, setSelectedDifficultyByJoinId] = useState<
    Record<string, Difficulty>
  >({});

  const navigate = useNavigate();

  const categories = useMemo(() => getCategories(), []);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setTestGroups(getTestGroupsByCategory(category));
  };

  const handleDifficultyChange = (joinId: string, difficulty: Difficulty) => {
    setSelectedDifficultyByJoinId((prev) => ({
      ...prev,
      [joinId]: difficulty,
    }));
  };

  const getCurrentDifficulty = (testGroup: TestGroup): Difficulty => {
    return (
      selectedDifficultyByJoinId[testGroup.joinId] ??
      testGroup.availableDifficulties[0]
    );
  };

  const handleStart = (testGroup: TestGroup) => {
    const currentDifficulty = getCurrentDifficulty(testGroup);
    const testId = testGroup.testIdByDifficulty[currentDifficulty];

    if (typeof testId !== "number") return;

    navigate(`/test/${testId}`);
  };

  return (
    <>
      {selectedCategory === null ? (
        <CategoryList
          categories={categories}
          onSelectCategory={handleSelectCategory}
        />
      ) : (
        <>
          <Button type="link" onClick={() => setSelectedCategory(null)}>
            Назад
          </Button>

          {testGroups.map((test) => (
            <TestGroupCard
              key={test.joinId}
              test={test}
              currentDifficulty={getCurrentDifficulty(test)}
              handleDifficultyChange={handleDifficultyChange}
              handleStart={handleStart}
            />
          ))}
        </>
      )}
    </>
  );
};
