// import IconButton from "../IconButton/IconButton";
// import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      {/* <IconButton type="button" className="TodoList__btn" onClick={onDelete}>
        <DeleteIcon width={30} height="30" fill="white" />
      </IconButton> */}
      <button type="button" className="TodoList__btn" onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

export default Todo;
