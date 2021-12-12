import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    difference: 1
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + +state.difference
        },
        decrement: (state) => {
            state.count = state.count - state.difference
        },
        incrementByAmount: (state, action) => {
            state.difference = action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;