import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { CartFill as CartIcon } from 'react-bootstrap-icons';
import { clearCart, hidePurchaseModal, purchase } from '../../store/cart/actions';
import CartItemsTable from '../../components/CartItemsTable/CartItemsTable';
import Header from '../Header';
import PurchaseModal from '../../components/PurchaseModal/PurchaseModal';
import './styles.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.data);
  const totalOrderPrice = useSelector((state) => state.cart.totalPrice);
  const isModalShown = useSelector((state) => state.cart.isPurchaseModalShown);

  const onPurchase = () => {
    dispatch(purchase(cartItems));
  };

  const onCloseModal = () => {
    dispatch(hidePurchaseModal());
    dispatch(clearCart());
  };

  return (
    <>
      <Header />
      { cartItems && cartItems.length
        ? (
          <div className="wrapper">
            <div className="purchase-button-container">
              <Button variant="secondary" onClick={onPurchase}>Purchase</Button>
            </div>
            <CartItemsTable items={cartItems} totalPrice={totalOrderPrice} />
          </div>
        )
        : (
          <div className="wrapper empty-cart-container">
            <CartIcon className="cart-icon" />
            <p>Your shopping cart is empty</p>
          </div>
        )}
      { isModalShown && (
      <PurchaseModal onClose={onCloseModal}>
        <CartItemsTable items={cartItems} totalPrice={totalOrderPrice} />
      </PurchaseModal>
      )}
    </>
  );
};

export default Cart;
