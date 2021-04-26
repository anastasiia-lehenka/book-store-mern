import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  SHOW_REGISTRATION_MESSAGE,
  HIDE_REGISTRATION_MESSAGE,
} from './types';

export const logIn = (payload) => ({ type: LOG_IN, payload });
export const logInSuccess = (payload) => ({ type: LOG_IN_SUCCESS, payload });
export const logInFailure = (payload) => ({ type: LOG_IN_FAILURE, payload });
export const register = (payload) => ({ type: REGISTER, payload });
export const registerSuccess = (payload) => ({ type: REGISTER_SUCCESS, payload });
export const registerFailure = (payload) => ({ type: REGISTER_FAILURE, payload });
export const showRegistrationMessage = () => ({ type: SHOW_REGISTRATION_MESSAGE });
export const hideRegistrationMessage = () => ({ type: HIDE_REGISTRATION_MESSAGE });
export const logOut = () => ({ type: LOG_OUT });
