import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNum, decNum, getUserInput } from './actions/index';

const App = () => {

  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();

  return (
    <div>
      <div >
        <div>
          <h1>Increment/Decrement Counter</h1>
          <h4>With Redux</h4>
        </div>
        <div>
          <input type="text" placeholder="Enter a difference" onChange={(e) => dispatch(getUserInput(e.target.value))} />
        </div>
        <div>
          <button onClick={() => dispatch(decNum())}>-</button>
          <span>{myState.count}</span>
          <button onClick={() => dispatch(incNum())}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;