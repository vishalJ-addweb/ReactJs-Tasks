import React, { useReducer } from 'react';
const initialState = {
    count: 0,
    difference: 1
}
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + +state.difference }
        case "DECREMENT":
            return { ...state, count: state.count - state.difference }
        case "INCREMENTBYNUMBER":
            return { ...state, difference: action.value }
        default :
            return state
    }
}
const UseReducerCounter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <h1>Counter With UseReducer</h1>
            </div>
            <div>
                <input type="text" placeholder="Enter a number for difference" onChange={(e) => dispatch({ type: "INCREMENTBYNUMBER", value: e.target.value })} />
            </div>
            <div>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
                <span>{state.count}</span>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            </div>
        </div>
    )
}

export default UseReducerCounter
