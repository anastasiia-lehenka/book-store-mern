import {
  ADD_BOOK_TO_CART,
  PURCHASE,
  PURCHASE_FAILURE,
  PURCHASE_SUCCESS,
  SHOW_PURCHASE_MODAL,
  HIDE_PURCHASE_MODAL,
  CLEAR_CART,
} from './types';

const initialState = {
  data: [],
  totalPrice: 0,
  totalCount: 0,
  isLoading: false,
  error: '',
  isPurchaseModalShown: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_TO_CART:
      // eslint-disable-next-line no-case-declarations
      let data;

      if (state.data.find((book) => book.id === action.payload.id)) {
        data = state.data.map((book) => (
          action.payload.id === book.id
            ? {
              ...book,
              count: book.count + action.payload.count,
              totalPrice: Number((book.totalPrice + action.payload.totalPrice).toFixed(2)),
            }
            : book
        ));
      } else {
        data = [...state.data, action.payload];
      }

      return {
        ...state,
        data,
        totalPrice: Number((state.totalPrice + action.payload.totalPrice).toFixed(2)),
        totalCount: state.totalCount + action.payload.count,
      };

    case PURCHASE:
      return {
        ...state,
        isLoading: true,
        error: '',
      };

    case PURCHASE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
      };

    case PURCHASE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case SHOW_PURCHASE_MODAL:
      return {
        ...state,
        isPurchaseModalShown: true,
      };

    case HIDE_PURCHASE_MODAL:
      return {
        ...state,
        isPurchaseModalShown: false,
      };

    case CLEAR_CART:
      return initialState;

    default: return state;
  }
};

export default reducer;
