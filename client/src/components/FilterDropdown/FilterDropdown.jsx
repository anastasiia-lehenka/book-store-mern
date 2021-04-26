import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.scss';

const FilterDropdown = ({ value, onChange }) => (
  <div className="filter">
    <Form.Label className="mb-0 mr-3">Price:</Form.Label>
    <Form.Control
      className="filter__dropdown"
      as="select"
      value={value}
      onChange={onChange}
      aria-label="filter-input"
    >
      <option value="All">All</option>
      <option value="0-25">0-25$</option>
      <option value="25-50">25-50$</option>
      <option value="50">50+$</option>
    </Form.Control>
  </div>
);

FilterDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default React.memo(FilterDropdown);
