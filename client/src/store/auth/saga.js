import { call, put } from 'redux-saga/effects';
import service from '../../services/service';
import { deleteUserData, setUserData } from '../../services/localStorageApi';
import {
  logInSuccess,
  logInFailure,
  registerSuccess,
  registerFailure,
  showRegistrationMessage,
} from './actions';

export function* logInWorker({ payload }) {
  let authData;

  try {
    authData = yield call(service.logIn, payload);
  } catch (err) {
    yield put(logInFailure(err.message));
    return;
  }

  yield put(logInSuccess(authData));
  yield call(setUserData, authData);
}

export function* registerWorker({ payload }) {
  try {
    yield call(service.register, payload);
  } catch (err) {
    yield put(registerFailure(err.message));
    return;
  }

  yield put(registerSuccess());
  yield put(showRegistrationMessage());
}

export function* logOutWorker() {
  yield call(deleteUserData);
}
