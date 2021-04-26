import React, { useState } from 'react';
import {
  InputGroup, Button, FormControl, Form,
} from 'react-bootstrap';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';
import './styles.scss';

const Search = ({ defaultValue, onSearch }) => {
  const [value, setValue] = useState(defaultValue);

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <Form className="search" onSubmit={onSubmit} aria-label="form">
      <InputGroup>
        <InputGroup.Prepend>
          <Button className="search__button" type="submit" variant="outline-secondary" role="button">
            <SearchIcon />
          </Button>
        </InputGroup.Prepend>
        <FormControl
          className="search__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Search"
          aria-label="search-input"
        />
      </InputGroup>
    </Form>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default React.memo(Search);
