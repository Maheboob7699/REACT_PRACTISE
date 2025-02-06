import { addTodo,removeTodo } from "../action/action";
import { put, takeEvery } from "redux-saga/effects";

function* addtodoSaga(data){
    yield put(addTodo(data.payload));
}

function* removetodoSaga(id){
    yield put(removeTodo(id.payload));
}

export function* rootSaga(){
    yield takeEvery("ADDTODO_REQUEST",addtodoSaga)
    yield takeEvery("REMOVETODO_REQUEST",removetodoSaga)
} 