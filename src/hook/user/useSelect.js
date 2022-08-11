import { useSelector } from "react-redux/es/exports";

function useSelect() {
  const user = useSelector((state) => state.setUser);
  const userList = user.user;
  const input = user.inputText;
  return { userList, input };
}

export default useSelect;
