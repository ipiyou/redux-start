import { shallowEqual, useSelector } from "react-redux/es/exports";

function useSelect() {
  const user = useSelector((state) => state.setUser, shallowEqual);
  const userList = user.user.data;
  const input = user.inputText;
  console.log(user)
  return { userList, input };
}

export default useSelect;
