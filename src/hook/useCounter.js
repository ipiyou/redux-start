import { decrease, increase } from "../module/countReducer.js";
import {useDispatch} from 'react-redux'

function useCounter() {
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  return { onIncrease, onDecrease };
}


export default useCounter;