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
    default:
      return state
  }
}

const State = createContext();
const Dispatch = createContext();

const isnumber = (action) => {
  // console.log(action)
  switch (action.type) {
    case "incrementByAmount":
      if (action.value > 0) {
        return action
      } else {
        return { ...action, value: 1 }
      }
    default:
      return action
  }
};

const useReducerWithMiddleware = (reducer, initialState, middlewareFn) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchWithMiddleware = (action) => {
    const newAction = middlewareFn(action);
    dispatch(newAction);
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