import { createActions, handleActions, combineActions } from "redux-action";

const INCREASE_COUNT = "INCREASE_COUNT";
const DECREASE_COUNT = "DECREASE_COUNT";

const initState = {
  count: 0,
};

export const increase = () => ({
  type: INCREASE_COUNT,
});

export const decrease = () => ({
  type: DECREASE_COUNT,
});

const setCount = (state = initState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default setCount;
