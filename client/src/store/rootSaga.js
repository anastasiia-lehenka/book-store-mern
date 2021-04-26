import { takeEvery } from 'redux-saga/effects';
import {
  logInWorker,
  logOutWorker,
  registerWorker,
} from './auth/saga';
import { loadAllBooksWorker, loadBookWorker } from './books/saga';
import { purchaseWorker } from './cart/saga';
import { LOG_IN, LOG_OUT, REGISTER } from './auth/types';
import { LOAD_ALL_BOOKS, LOAD_BOOK } from './books/types';
import { PURCHASE } from './cart/types';

function* rootSaga() {
  yield takeEvery(LOG_IN, logInWorker);
  yield takeEvery(REGISTER, registerWorker);
  yield takeEvery(LOAD_ALL_BOOKS, loadAllBooksWorker);
  yield takeEvery(LOAD_BOOK, loadBookWorker);
  yield takeEvery(PURCHASE, purchaseWorker);
  yield takeEvery(LOG_OUT, logOutWorker);
}

export default rootSaga;
