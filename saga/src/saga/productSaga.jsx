import axios from "axios";
import { productSuccess,ProductError } from "../action/action";
import { put, takeEvery } from "redux-saga/effects";

function* fetchProductSaga(){
    try {
        let response = yield axios.get("https://fakestoreapi.com/products"); 
        yield put(productSuccess(response.data));  
    } catch (error) {
        yield put(ProductError(error.message));
    }
}

function* rootSaga(){
    yield takeEvery("FETCH_REQUEST",fetchProductSaga);
}

export default rootSaga