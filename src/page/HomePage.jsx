import FloatButton from "../components/routeButton/FloatButton";

function HomePage() {
  return (
    <>
      <FloatButton float="left" Route="Count" />
      <FloatButton float="left" Route="UserList" />
    </>
  );
}

export default HomePage;
