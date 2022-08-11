import { createAction, createReducer } from "redux-action";

const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";
const TOGGLE_USER = "TOGGLE_USER";
const CHANGE_TEXT = "CHANGE_TEXT";

const initState = {
  user: [],
  inputText: "",
};

export const addUser = ({ Text, id }) => ({
  type: ADD_USER,
  user: {
    Text,
    id,
    toggle: false,
  },
});

export const removeUser = (id) => ({ type: REMOVE_USER, id });
export const toggleUser = (id) => ({ type: TOGGLE_USER, id });
export const changeText = (text) => ({ type: CHANGE_TEXT, text });

const setUser = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      if (state.inputText) {
        return {
          ...state,
          user: state.user.concat(action.user),
          inputText: "",
        };
      }
    case REMOVE_USER:
      return {
        ...state,
        user: state.user.filter((e) => e.id !== action.id),
      };
    case TOGGLE_USER:
      console.log(state.user, action.id);
      return {
        ...state,
        user: state.user.map((e) =>
          e.id === action.id ? { ...e, toggle: !e.toggle } : e
        ),
      };
    case CHANGE_TEXT:
      return {
        ...state,
        inputText: action.text,
      };
    default:
      return state;
  }
};

export default setUser;
