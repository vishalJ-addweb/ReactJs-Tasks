import { put, takeEvery } from 'redux-saga/effects'

function* getUserInputAsync(action) {
    console.log(action);
    if (action.payload < 0 || action.payload === '' || isNaN(action.payload) === true) {
        yield put({ type: "AGE_USERINPUT_ASYNC", value: 1 })
    } else {
        yield put({ type: "AGE_USERINPUT_ASYNC", value: action.payload })
    }
}

export function* watchUserInput() {
    yield takeEvery("GETUSERINPUT", getUserInputAsync)
}