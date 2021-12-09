import React, { createContext, useReducer } from 'react';
import UseContextCounter from './UseContextCounter';

const initialState = {
  count: 0,
  difference: 1
}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + +state.difference }
    case "decrement":
      return { ...state, count: state.count - state.difference }
    case "incrementByAmount":
      return { ...state, difference: action.value }
    default :
      return state
  }
}
const State = createContext();
const Dispatch = createContext();


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <State.Provider value={state}>
        <Dispatch.Provider value={dispatch}>
          <UseContextCounter />
        </Dispatch.Provider>
      </State.Provider>
    </div>
  );
}

export default App;
export { State, Dispatch };
