import React, { createContext, useReducer } from 'react';
import UseContextCounter from './UseContextCounter';

const initialState = {
  count: 0,
  difference: 1
}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      console.log("reducer func")
      // return { ...state, count: state.count + +state.difference }
      return { ...state, count: state.count + +state.difference }
    case "decrement":
      return { ...state, count: state.count - state.difference }
    case "incrementByAmount":
      return { ...state, difference: action.value }
    default:
      return state
  }
}

const State = createContext();
const Dispatch = createContext();

const dummyFunc=(act)=>{
  console.log(act)
}

const isnumber = (action) => {
  // console.log(action)
  dummyFunc(action)
};

const useReducerWithMiddleware = (reducer, initialState, middlewareFn) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchWithMiddleware = (action) => {
    middlewareFn(action);
    dispatch(action);
  };

  return [state, dispatchWithMiddleware];
}




function App() {

  // const [state, dispatch] = useReducer(reducer, initialState)
  const [state, dispatch] = useReducerWithMiddleware(reducer, initialState, isnumber)

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

export default App
export { State, Dispatch }