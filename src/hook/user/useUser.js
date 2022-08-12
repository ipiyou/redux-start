import { useDispatch } from "react-redux/es/exports";
import {
  addUser,
  removeUser,
  toggleUser,
  changeText,
} from "../../module/userListReducer";

function useUser() {
  const dispatch = useDispatch();

  const add = ({ Text, id }) => {
    dispatch(addUser({ Text, id }));
  };
  const remove = (id) => dispatch(removeUser(id));
  const toggle = (id) => dispatch(toggleUser(id));
  const change = (e) => dispatch(changeText(e.target.value));
  return { add, remove, toggle, change };
}

export default useUser;
