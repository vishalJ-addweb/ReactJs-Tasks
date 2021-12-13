import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter'

function App() {

  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <h1>Increment/Decrement Counter</h1>
        <h4>Using Redux Toolkit</h4>
      </div>
      <div>
        <input type="text" placeholder="Type a number for difference" onChange={(e) => dispatch(incrementByAmount(e.target.value))} />
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count} </span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default App;
