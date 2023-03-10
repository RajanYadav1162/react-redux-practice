import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./counter";
import todoReducer from "./todo";
const reducer = combineReducers({
  counterReducer,
  todoReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
