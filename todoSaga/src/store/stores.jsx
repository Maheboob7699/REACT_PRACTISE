import { applyMiddleware, combineReducers, createStore } from "redux";
import todoReducer from "../switch/todoSwitch";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/todoSaga";

const sagaMiddleware =  createSagaMiddleware();

const rootReducer = combineReducers({
    todos:todoReducer
})

export const store = createStore(rootReducer
    ,applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)