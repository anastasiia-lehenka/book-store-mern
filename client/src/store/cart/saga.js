import { call, put, select } from 'redux-saga/effects';
import service from '../../services/service';
import {
  purchaseSuccess,
  purchaseFailure,
  showPurchaseModal,
} from './actions';

// eslint-disable-next-line import/prefer-default-export
export function* purchaseWorker({ payload }) {
  const { auth } = yield select();
  const data = {
    username: auth.username,
    books: payload.map((book) => ({
      _id: book.id,
      quantity: book.count,
    })),
  };

  try {
    yield call(service.purchase, data, auth.token);
  } catch (err) {
    yield put(purchaseFailure(err.message));
    return;
  }

  yield put(purchaseSuccess());
  yield put(showPurchaseModal());
}
