import { Title } from "../../entities/Components/Title";
import type { Category } from "../../shared/types/test";

import style from "./styles.module.css";

type CategoryListProps = {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
};

export const CategoryList = ({
  categories,
  onSelectCategory,
}: CategoryListProps) => {
  return (
    <>
      {categories.length === 0 && <p>Тесты еще не заполнены...</p>}

      <>
        <Title level={1}>Тесты по навыкам и языкам</Title>
        <ul className={style.category}>
          {categories.map((c) => (
            <li
              key={c}
              className={style.categoryItem}
              onClick={() => onSelectCategory(c)}
            >
              <Title level={2}>{c}</Title>
            </li>
          ))}
        </ul>
      </>
    </>
  );
};
