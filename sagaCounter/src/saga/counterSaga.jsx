import { increment,decrement } from "../Action/action";
import { put, takeEvery } from "redux-saga/effects";
function* incrementSaga(){
    yield put(increment())
}

function* decrementSaga(){
    yield put(decrement())
}

 export function* rootSaga(){
    yield takeEvery("INCREMENT_REQUEST", incrementSaga);
    yield takeEvery("DECREMENT_REQUEST", decrementSaga)
}