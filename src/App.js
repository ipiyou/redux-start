import useUserLoad from "./hook/user/useUserLoad";
import CounterPage from "./page/CounterPage";
import UserListPage from "./page/UserListPage";

function App() {
  const { loading, error } = useUserLoad();

  const Loading = () =>{
    if(loading) return <div>로딩 중...</div>
    if(error) return <div>오류!</div>
    return <UserListPage />
  }
  return (
    <>
      <CounterPage />
      {Loading()}
    </>
  );
}

export default App;
