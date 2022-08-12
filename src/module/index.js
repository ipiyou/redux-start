import { combineReducers } from "redux";
import setCount from "./countReducer.js";
import setUser from "./userListReducer";

const rootReducer = combineReducers({ setCount, setUser });

export default rootReducer;
