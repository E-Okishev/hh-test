import style from "./style.module.css";

type TitleLevel = 1 | 2 | 3;

type TitleProps = {
  children: string;
  level: TitleLevel;
};

export const Title = ({ children, level = 1 }: TitleProps) => {
  const HeadingTag = `h${level}` as React.ElementType;

  const baseClass = style.title;
  const dynamicClass =
    level === 2 ? style.h2 : level === 3 ? style.h3 : style.h1;
  return (
    <HeadingTag className={`${baseClass} ${dynamicClass}`}>
      {children}
    </HeadingTag>
  );
};
