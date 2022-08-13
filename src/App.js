import CounterPage from "./page/CounterPage";
import UserListPage from "./page/UserListPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Count" element={<CounterPage />} />
      <Route path="/UserList" element={<UserListPage />} />
    </Routes>
  );
}

export default App;
