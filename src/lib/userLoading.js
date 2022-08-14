import { call, put } from "redux-saga/effects";

export const UserSaga = (type, promiseAction) => {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_FAILURE`;

  return function* saga() {
    try {
      const payload = yield call(promiseAction);

      yield put({ type: SUCCESS, payload }); // 성공
    } catch (e) {
      yield put({ type: ERROR, payload: e, error: true }); // 실패
    }
  };
}

export const reduxTry = {
  initalState: (initData = []) => ({
    loading: false,
    data: initData,
    error: null,
  }),
  loading: (loadState = []) => ({
    loading: true,
    data: loadState,
    error: null,
  }),
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  error: (e) => ({
    loading: false,
    data: [],
    error: e,
  }),
};

export const handleActions = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_FAILURE`;
  return (state, action) => {
    const Keep = state.user.data.length === 0;
    switch (action.type) {
      case type:
        return {
          ...state,
          user: Keep ? reduxTry.loading() : state.user,
        };
      case SUCCESS:
        return {
          ...state,
          user: Keep ? reduxTry.success(action.payload) : state.user,
        };
      case ERROR:
        return {
          ...state,
          user: reduxTry.error(action.error),
        };
      default:
        return state;
    }
  };
};
