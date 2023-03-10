import { combineReducers, createStore } from "redux";
import counterReducer from "./counter";
import todoReducer from "./todo";
const reducer = combineReducers({
  counterReducer,
  todoReducer,
});

const store = createStore(reducer);

export default store;
