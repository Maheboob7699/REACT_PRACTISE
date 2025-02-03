// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Saga/saga';
import productReducer from './prodcutSwitch';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  userData: productReducer,  
});

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware) 
);

sagaMiddleware.run(rootSaga);  
