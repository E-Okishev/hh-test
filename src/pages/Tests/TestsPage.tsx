import { useMemo, useState } from "react";
import type { Difficulty, TestGroup } from "../../shared/types/test";
import { useNavigate, useParams } from "react-router-dom";

import { CategoryList } from "./CategoryList";
import { TestGroupCard } from "./TestGroupCard";
import { Button } from "../../entities/Components/Button/button";
import {
  getCategories,
  getTestGroupsByCategorySlug,
} from "../../features/tests/api/testsApi";
import { tests } from "../../shared/config/routes";

export const TestsPage = () => {
  const [selectedDifficultyByJoinId, setSelectedDifficultyByJoinId] = useState<
    Record<string, Difficulty>
  >({});

  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const slug = categorySlug;

  const testGroups = useMemo(() => {
    return slug ? getTestGroupsByCategorySlug(slug) : [];
  }, [slug]);
  const navigate = useNavigate();

  const categories = useMemo(() => getCategories(), []);

  const handleSelectCategory = (slug: string) => {
    navigate(`/tests/${slug}`);
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

    if (!slug) return;
    if (typeof testId !== "number") return;

    navigate(`/tests/${slug}/${testId}`);
  };

  return (
    <>
      {!slug ? (
        <CategoryList
          categories={categories}
          onSelectCategory={handleSelectCategory}
        />
      ) : (
        <>
          <Button type="link" onClick={() => navigate(tests)}>
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
