import { combineReducers } from "redux";
import setCount, { countDelay } from "./countReducer.js";
import setUser, { UserListSaga } from "./userListReducer";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ setCount, setUser });
export function* rootsaga() {
  yield all([countDelay(), UserListSaga()]);
}

export default rootReducer;
