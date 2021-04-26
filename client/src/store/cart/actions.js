import {
  ADD_BOOK_TO_CART,
  PURCHASE,
  PURCHASE_SUCCESS,
  PURCHASE_FAILURE,
  SHOW_PURCHASE_MODAL,
  HIDE_PURCHASE_MODAL,
  CLEAR_CART,
} from './types';

export const addBookToCart = (payload) => ({ type: ADD_BOOK_TO_CART, payload });
export const purchase = (payload) => ({ type: PURCHASE, payload });
export const purchaseSuccess = () => ({ type: PURCHASE_SUCCESS });
export const purchaseFailure = (payload) => ({ type: PURCHASE_FAILURE, payload });
export const showPurchaseModal = () => ({ type: SHOW_PURCHASE_MODAL });
export const hidePurchaseModal = () => ({ type: HIDE_PURCHASE_MODAL });
export const clearCart = () => ({ type: CLEAR_CART });
