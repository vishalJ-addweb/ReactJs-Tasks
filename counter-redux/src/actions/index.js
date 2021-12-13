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
export const getUserInput = (num) => {
    return {
        type: "GETUSERINPUT",
        payload: num
    }
}