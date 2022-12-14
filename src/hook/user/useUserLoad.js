import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux/es/exports";
import { getUser } from "../../module/userListReducer";

const useUserLoad = () => {
  const { loading, error } = useSelector((state) => state.setUser.user,shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return { loading, error };
};

export default useUserLoad;
