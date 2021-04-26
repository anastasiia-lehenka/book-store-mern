import { getUserData } from '../../services/localStorageApi';
import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  SHOW_REGISTRATION_MESSAGE,
  HIDE_REGISTRATION_MESSAGE,
  LOG_OUT,
} from './types';

const userData = getUserData();

const initialState = userData
  ? {
    token: userData.token,
    username: userData.username,
    isLoading: false,
    isRegistrationMessageShown: false,
    error: '',
  }
  : {
    token: '',
    username: '',
    isLoading: false,
    isRegistrationMessageShown: false,
    error: '',
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoading: true,
        error: '',
        isRegistrationMessageShown: false,
      };

    case LOG_IN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: '',
        isRegistrationMessageShown: false,
      };

    case LOG_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isRegistrationMessageShown: false,
      };

    case REGISTER:
      return {
        ...state,
        isLoading: true,
        error: '',
        isRegistrationMessageShown: false,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        isRegistrationMessageShown: false,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isRegistrationMessageShown: false,
      };

    case SHOW_REGISTRATION_MESSAGE:
      return {
        ...state,
        isRegistrationMessageShown: true,
      };

    case HIDE_REGISTRATION_MESSAGE:
      return {
        ...state,
        isRegistrationMessageShown: false,
      };

    case LOG_OUT:
      return {
        token: '',
        username: '',
        isLoading: false,
        isRegistrationMessageShown: false,
        error: '',
      };

    default: return state;
  }
};

export default reducer;
