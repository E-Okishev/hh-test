import { Title } from "../../entities/Components/Title";
import type { Difficulty, TestGroup } from "../../shared/types/test";

type TestGroupCardProps = {
  test: TestGroup;
  currentDifficulty: Difficulty;
  handleDifficultyChange: (
    joinId: TestGroup["joinId"],
    difficulty: Difficulty,
  ) => void;
  handleStart: (testGroup: TestGroup) => void;
};

export const TestGroupCard = ({
  test,
  currentDifficulty,
  handleDifficultyChange,
  handleStart,
}: TestGroupCardProps) => {
  return (
    <div>
      <Title level={2}>{test.title}</Title>

      {test.availableDifficulties.length === 1 ? null : (
        <div>
          {test.availableDifficulties.map((difficulty) => (
            <label key={difficulty}>
              <input
                type="radio"
                name={test.joinId}
                value={difficulty}
                checked={difficulty === currentDifficulty}
                onChange={() => handleDifficultyChange(test.joinId, difficulty)}
              />
              {difficulty}
            </label>
          ))}
        </div>
      )}

      <button onClick={() => handleStart(test)}>Начать</button>
    </div>
  );
};
