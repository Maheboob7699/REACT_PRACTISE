import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "../reducer/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/productSaga";

const sagaMIddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    productData:productReducer
})

export const store = createStore(rootReducer
    ,applyMiddleware(sagaMIddleware)

)

 sagaMIddleware.run(rootSaga);