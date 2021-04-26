import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CartItemsTable = ({ items, totalPrice }) => (
  <>
    <Table striped bordered hover className="mb-4" role="table">
      <thead>
        <tr role="row">
          <th>Name</th>
          <th>Count</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        { items.map((item) => (
          <tr role="row" key={item.id}>
            <td role="cell">{item.title}</td>
            <td role="cell">{item.count}</td>
            <td role="cell">{item.price}</td>
            <td role="cell">{item.totalPrice}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <p className="text-right" data-testid="cart-total-price">{`Total price: ${totalPrice} $`}</p>
  </>
);

CartItemsTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    totalPrice: PropTypes.number,
  })).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default CartItemsTable;
