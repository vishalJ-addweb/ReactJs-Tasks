import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';
// import { incNum, decNum, getUserInput } from './actions/index';

function App() {

  // const myState = useSelector((state) => state.changeNumber)
  // const dispatch = useDispatch();

  // const {count,difference} = useSelector((state)=>state.counter)
  const count = useSelector((state)=>state.counter.count)
  const difference = useSelector((state)=>state.counter.difference)
  const dispatch = useDispatch();

  return (
    <div>
      <div >
        <div>
          <h1>Increment/Decrement Counter</h1>
          <h4>With Redux</h4>
        </div>
        <div>
          {/* <input type="text" placeholder="Enter a difference" onChange={(e) => dispatch(getUserInput(e.target.value))} /> */}
          <input type="text" placeholder="Enter a difference" onChange={(e) => dispatch(incrementByAmount(e.target.value))} />
        </div>
        <div>
          {/* <button onClick={() => dispatch(decNum())}>-</button> */}
          <button onClick={() => dispatch(decrement())}>-</button>
          {/* <span>{myState.count}</span> */}
          <span>{count}</span>
          {/* <button onClick={() => dispatch(incNum())}>+</button> */}
          <button onClick={() => dispatch(increment())}>+</button>
        </div>

      </div>
    </div>
  );
}

export default App;
