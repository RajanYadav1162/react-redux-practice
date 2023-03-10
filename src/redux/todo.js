const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const initialState = {
  todos: [
    { id: 1, text: "todo1", done: true },
    { id: 2, text: "todo2", done: false },
  ],
};

export const addTodo = (data) => {
  const idmaker =
    "1232434534645758589sfasdfsdfgwetweJHSGSGHHHJHKJHKQJHK!@$%^&*(";
  const sizeidMaker = idmaker.length;
  let id = "";
  for (let i = 0; i < 10; i++) {
    id += idmaker[Math.floor(Math.random() * sizeidMaker)];
  }
  return (dispatch) => {
    setTimeout(() => {
      const { text, done } = data;

      const newTodo = { id, text, done };
      return dispatch({ type: ADD_TODO, payload: newTodo });
    }, 2000);
  };
};

export const removeTodo = (data) => {
  const id = data;
  return { type: REMOVE_TODO, payload: id };
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
