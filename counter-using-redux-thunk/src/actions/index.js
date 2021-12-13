export const incNum = () => {
    return {
        type: "INCREMENT",
    }
}
export const decNum = () => {
    return {
        type: "DECREMENT"
    }
}
// export const getUserInput = (num) => {
//     return {
//         type: "GETUSERINPUT",
//         payload: num
//     }
// }

export const getUserInput = (num) => {
    return (dispatch) => {
        setTimeout(() => {
            if (num < 0 || num === "" || isNaN(num) === true) {
                return dispatch(getUserInputAsync(1));
            } else {
                return dispatch(getUserInputAsync(num));
            }
        }, 1000);
    };
}

export const getUserInputAsync = (num) => {
    return {
        type: "GETUSERINPUT",
        payload: num
    }
}