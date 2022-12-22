import s from "./Counter.module.css";

export const Value = ({ onValue }) => (
  <span className={s.counter__value}>{onValue}</span>
);
