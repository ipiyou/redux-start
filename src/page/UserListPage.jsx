import UserListContainer from "../container/UserListContainer";
import useUserLoad from "../hook/user/useUserLoad";

function UserListPage() {
  const { loading, error } = useUserLoad();

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류!</div>;
  return <UserListContainer />;
}

export default UserListPage;
