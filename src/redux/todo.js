const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const initialState = {
  todos: [
    { id: 1, text: "todo1", done: true },
    { id: 2, text: "todo2", done: false },
  ],
};

export const addTodo = (data) => {
  const { text, done } = data;
  const id = initialState.todos.length + 1;
  const newTodo = { id, text, done };

  return { type: ADD_TODO, payload: newTodo };
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
