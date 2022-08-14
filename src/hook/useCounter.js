import { decrease, decreaseDelay, increase, increaseDelay } from "../module/countReducer.js";
import { useDispatch } from "react-redux";

function useCounter() {
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increaseDelay());
  const onDecrease = () => dispatch(decreaseDelay());
  return { onIncrease, onDecrease };
}

export default useCounter;
