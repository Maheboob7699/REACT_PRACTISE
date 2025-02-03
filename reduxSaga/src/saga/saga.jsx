// saga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchSuccess, fetchError } from '../action/action';  

const fetchData = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
};

function* fetchDataSaga() {
  try {
    const data = yield call(fetchData); 
    yield put(fetchSuccess(data));  
  } catch (error) {
    yield put(fetchError(error.message));  
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_DATA', fetchDataSaga);  
}

export default rootSaga;


