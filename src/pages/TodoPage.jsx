import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/todo";
import Todo from "../Todo";

const TodoPage = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo({ text: input, done: false }));
  };
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1 className="text-5xl font-bold mb-6">Your TaskLists</h1>
      <div className="flex gap-x-2 mb-4">
        <input
          type="text"
          placeholder="Add Todo..."
          className="input input-bordered input-success w-full max-w-lg"
          onChange={handleInput}
          value={input}
        />
        <button
          onClick={handleAdd}
          className="btn w-24 btn-success  hover:border hover:border-blue-700"
        >
          ADD
        </button>
      </div>
      <div className=" flex flex-col self-center">
        {todos.map((item, idx) => (
          <Todo text={item.text} count={idx + 1} key={idx} id={item.id} />
        ))}
      </div>
    </div>
  );
};
export default TodoPage;
