import React, { useContext } from 'react';
import { State, Dispatch } from './App';

const UseContextCounter = () => {

    const state = useContext(State)
    const dispatch = useContext(Dispatch)

    return (
        <div>
            <div>
                <h1>Counter With UseContext</h1>
            </div>
            <div>
                <input type="text" placeholder="Enter a number for difference" onChange={(e) => dispatch({ type: "incrementByAmount", value: e.target.value })} />
            </div>
            <div>
                <button onClick={() => {
                    dispatch({ type: "decrement" })
                }}>-</button>
                <span>{state.count}</span>
                <button onClick={() => { dispatch({ type: "increment" }) }}>+</button>
            </div>
        </div>
    )
}

export default UseContextCounter
