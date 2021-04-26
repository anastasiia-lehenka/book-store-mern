import {
  LOAD_ALL_BOOKS,
  LOAD_ALL_BOOKS_SUCCESS,
  LOAD_ALL_BOOKS_FAILURE,
  LOAD_BOOK,
  LOAD_BOOK_SUCCESS,
  LOAD_BOOK_FAILURE,
  SET_BOOKS_FILTER,
  SET_BOOKS_SEARCH,
} from './types';
import { LOG_OUT } from '../auth/types';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
  search: '',
  filter: 'All',
  openedBook: {
    data: {},
    isLoading: false,
    error: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_BOOKS:
      return {
        ...state,
        isLoading: true,
        error: '',
      };

    case LOAD_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: '',
      };

    case LOAD_ALL_BOOKS_FAILURE:
      return {
        ...state,
        data: [],
        isLoading: false,
        error: action.payload,
      };

    case LOAD_BOOK:
      return {
        ...state,
        openedBook: {
          ...state.openedBook,
          data: {},
          isLoading: true,
          error: '',
        },
      };

    case LOAD_BOOK_SUCCESS:
      return {
        ...state,
        openedBook: {
          data: action.payload,
          isLoading: false,
          error: '',
        },
      };

    case LOAD_BOOK_FAILURE:
      return {
        ...state,
        openedBook: {
          data: {},
          isLoading: false,
          error: action.payload,
        },
      };

    case SET_BOOKS_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    case SET_BOOKS_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case LOG_OUT:
      return initialState;

    default: return state;
  }
};

export default reducer;
