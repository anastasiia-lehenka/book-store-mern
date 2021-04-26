import { call, put, select } from 'redux-saga/effects';
import service from '../../services/service';
import {
  loadAllBooksSuccess,
  loadAllBooksFailure,
  loadBookSuccess,
  loadBookFailure,
} from './actions';

export function* loadAllBooksWorker() {
  let books;
  const { auth } = yield select();

  try {
    books = yield call(service.getAllBooks, auth.token);
  } catch (err) {
    yield put(loadAllBooksFailure(err.message));
    return;
  }

  yield put(loadAllBooksSuccess(books));
}

export function* loadBookWorker({ payload }) {
  let book;
  const { auth } = yield select();

  try {
    book = yield call(service.getBook, payload, auth.token);
  } catch (err) {
    yield put(loadBookFailure(err.message));
    return;
  }

  yield put(loadBookSuccess(book));
}
