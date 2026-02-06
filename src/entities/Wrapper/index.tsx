import style from "./wrapper.module.css";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.wrapper}>{children}</div>;
};
