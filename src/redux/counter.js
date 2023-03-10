// 2.action type
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 1.initial state
const initialState = {
  count: 0,
};

// 3.action creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 4.reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 10 };
    case DECREASE:
      return {
        ...state,
        count: state.count - 10,
      };
    default:
      return state;
  }
};
export default counterReducer;
