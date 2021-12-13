const initialState = {
    count:0,
    difference:1
};

const changeNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return {...state,count:state.count + +state.difference}
        case "DECREMENT": return {...state,count:state.count-state.difference}
        case "GETUSERINPUT": return {...state, difference:action.payload}
        default: return state
    }
}

export default changeNumber