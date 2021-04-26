import {
  LOAD_ALL_BOOKS,
  LOAD_ALL_BOOKS_FAILURE,
  LOAD_ALL_BOOKS_SUCCESS,
  LOAD_BOOK,
  LOAD_BOOK_FAILURE,
  LOAD_BOOK_SUCCESS,
  SET_BOOKS_SEARCH,
  SET_BOOKS_FILTER,
} from './types';

export const loadAllBooks = () => ({ type: LOAD_ALL_BOOKS });
export const loadAllBooksSuccess = (payload) => ({ type: LOAD_ALL_BOOKS_SUCCESS, payload });
export const loadAllBooksFailure = (payload) => ({ type: LOAD_ALL_BOOKS_FAILURE, payload });
export const loadBook = (payload) => ({ type: LOAD_BOOK, payload });
export const loadBookSuccess = (payload) => ({ type: LOAD_BOOK_SUCCESS, payload });
export const loadBookFailure = (payload) => ({ type: LOAD_BOOK_FAILURE, payload });
export const setBooksSearch = (payload) => ({ type: SET_BOOKS_SEARCH, payload });
export const setBooksFilter = (payload) => ({ type: SET_BOOKS_FILTER, payload });
