import { Title } from "../../entities/Components/Title";
import type { CategoryItem } from "../../features/tests/api/testsApi";

import style from "./styles.module.css";

type CategoryListProps = {
  categories: CategoryItem[];
  onSelectCategory: (categorySlug: string) => void;
};

export const CategoryList = ({
  categories,
  onSelectCategory,
}: CategoryListProps) => {
  return (
    <>
      {categories.length === 0 && <p>Тесты еще не заполнены...</p>}

      <Title level={1}>Тесты по навыкам и языкам</Title>
      <ul className={style.category}>
        {categories.map((c) => (
          <li
            key={c.slug}
            className={style.categoryItem}
            onClick={() => onSelectCategory(c.slug)}
          >
            <Title level={2}>{c.title}</Title>
          </li>
        ))}
      </ul>
    </>
  );
};
