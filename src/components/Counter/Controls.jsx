import s from "./Counter.module.css";

export const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className={s.counter__controls}>
      <button type="button" onClick={onIncrement}>
        Збільшити на 1
      </button>
      <button type="button" onClick={onDecrement}>
        Зменшити на 1
      </button>
    </div>
  );
};
