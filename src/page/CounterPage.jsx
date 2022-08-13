import ButtonElement from "../components/counter/ButtonElement";
import CountElement from "../components/counter/CountElement.jsx";
import useCounter from "../hook/useCounter";
import { useSelector } from "react-redux/es/exports";
import FloatButton from "../components/routeButton/FloatButton";

function CounterPage() {
  const { onIncrease, onDecrease } = useCounter();
  const count = useSelector((state) => state.setCount.count);
  return (
    <>
      <CountElement count={count} />
      <FloatButton float="right" Route="UserList" />
      <ButtonElement display="+" ClickEvent={onIncrease} />
      <ButtonElement display="-" ClickEvent={onDecrease} />
    </>
  );
}

export default CounterPage;
