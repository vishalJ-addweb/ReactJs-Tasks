export const incNum = (num) => {
    return {
        type: "INCREMENT",
        payload:num
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
        payload:num
    }
}