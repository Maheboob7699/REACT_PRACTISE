import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "../switch/counterSwitch";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/counterSaga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    counts:counterReducer
})

export const store = createStore(rootReducer
    ,
    applyMiddleware(sagaMiddleware)
) 

sagaMiddleware.run (rootSaga)