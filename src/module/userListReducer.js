import { createAction, createReducer } from "redux-action";
import { getUsers } from "../apis/user";
import { handleActions, ThunkPromise,reduxTry } from "../lib/userLoading";

const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";
const TOGGLE_USER = "TOGGLE_USER";
const CHANGE_TEXT = "CHANGE_TEXT";

const GET_USERS = "GET_USERS";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_ERROR = "GET_USERS_ERROR";

const initState = {
  user: reduxTry.initalState(),
  inputText: "",
};

export const addUser = ({ Text, id }) => ({
  type: ADD_USER,
  data: {
    Text,
    id,
    toggle: false,
  },
});

export const removeUser = (id) => ({ type: REMOVE_USER, id });
export const toggleUser = (id) => ({ type: TOGGLE_USER, id });
export const changeText = (text) => ({ type: CHANGE_TEXT, text });

export const getUser = ThunkPromise(GET_USERS, getUsers);

const setUser = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      if (state.inputText) {
        return {
          ...state,
          user: state.user.data.concat(action.user),
          inputText: "",
        };
      }
    case REMOVE_USER:
      return {
        ...state,
        user: state.user.data.filter((e) => e.id !== action.id),
      };
    case TOGGLE_USER:
      return {
        ...state,
        user: state.user.data.map((e) =>
          e.id === action.id ? { ...e, toggle: !e.toggle } : e
        ),
      };
    case CHANGE_TEXT:
      return {
        ...state,
        inputText: action.text,
      };
    case GET_USERS:
    case GET_USERS_SUCCESS:
    case GET_USERS_ERROR:
      return handleActions(GET_USERS)(state, action);
    default:
      return state;
  }
};

export default setUser;
