import { useDispatch } from "react-redux";
import { removeTodo } from "./redux/todo";

const Todo = ({ text, count, id }) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1>
          {count}. {text}
        </h1>

        <button
          className="btn btn-error btn-outline btn-small my-2"
          onClick={() => handleClick(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default Todo;
