import { useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import {
  addUser,
  removeUser,
  toggleUser,
  changeText,
} from "../../module/userListReducer";

function useUser() {
  const dispatch = useDispatch();
  let idx = useRef(0);

  const add = ({ Text, id }) => {
    idx.current += 1
    dispatch(addUser({ Text, id }));
  };
  const remove = (id) => dispatch(removeUser(id));
  const toggle = (id) => dispatch(toggleUser(id));
  const change = (e) => dispatch(changeText(e.target.value));
  return { idx, add, remove, toggle, change };
}

export default useUser;
