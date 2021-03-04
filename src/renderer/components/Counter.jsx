import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCounter, updateCounter } from "../reducers/counter";

function Counter() {
  const dispatch = useDispatch();
  const storedCount = useSelector(selectCounter);

  const [count, setCount] = useState(storedCount);

  const decrementCount = () => setCount(count - 1);
  const incrementCount = () => setCount(count + 1);

  const updateCount = () => dispatch(updateCounter(count));
  const clearCount = () => {
    dispatch(updateCounter(0));
    setCount(0);
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button type="button" onClick={decrementCount}>
        Decrement
      </button>
      <button type="button" onClick={incrementCount}>
        Increment
      </button>
      <button type="submit" onClick={updateCount}>
        Save Count
      </button>
      <button type="submit" onClick={clearCount}>
        Clear Count
      </button>
    </>
  );
}

export default Counter;
