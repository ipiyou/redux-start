import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE_COUNT = "INCREASE_COUNT";
const DECREASE_COUNT = "DECREASE_COUNT";
const INCREASE_DELAY = "INCREASE_DELAY";
const DECREASE_DELAY = "DECREASE_DELAY";

const initState = {
  count: 0,
};

export const increase = () => ({ type: INCREASE_COUNT });
export const decrease = () => ({ type: DECREASE_COUNT });
export const increaseDelay = () => ({ type: INCREASE_DELAY });
export const decreaseDelay = () => ({ type: DECREASE_DELAY });

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(500);
  yield put(decrease());
}

export function* countDelay() {
  yield takeEvery(INCREASE_DELAY, increaseSaga);
  yield takeLatest(DECREASE_DELAY, decreaseSaga);
}

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
