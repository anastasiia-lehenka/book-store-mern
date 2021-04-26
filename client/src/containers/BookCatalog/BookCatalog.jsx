import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllBooks, setBooksFilter, setBooksSearch } from '../../store/books/actions';
import BookItem from '../../components/BookItem';
import FilterDropdown from '../../components/FilterDropdown';
import Header from '../Header';
import Loader from '../../components/Loader';
import Search from '../../components/Search';
import './styles.scss';

const BookCatalog = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.data);
  const loadingBooks = useSelector((state) => state.books.isLoading);
  const searchText = useSelector((state) => state.books.search);
  const filterValue = useSelector((state) => state.books.filter);

  useEffect(() => {
    if (!books.length) {
      dispatch(loadAllBooks());
    }
  }, []);

  const onSearch = useCallback((value) => {
    dispatch(setBooksSearch(value.toLowerCase().trim()));
  }, []);

  const onFilter = useCallback((e) => {
    dispatch(setBooksFilter(e.target.value));
  }, []);

  const searchBooks = (booksData, search) => (
    booksData.filter((book) => book.title.toLowerCase().includes(search)));

  const filterBooks = (booksData, filter) => {
    if (filter !== 'All') {
      const borderValues = filter.split('-');
      return borderValues[1]
        ? booksData.filter((book) => book.price > borderValues[0] && book.price < borderValues[1])
        : booksData.filter((book) => book.price > borderValues[0]);
    }

    return booksData;
  };

  const renderBooks = (booksData) => (
    booksData.length
      ? (
        <div className="books-container">
          { booksData.map((book) => <BookItem key={book._id} bookData={book} />)}
        </div>
      )
      : <p className="text-muted pt-5 text-center">No items match your search</p>
  );

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="filters">
          <Search defaultValue={searchText} onSearch={onSearch} />
          <FilterDropdown value={filterValue} onChange={onFilter} />
        </div>
        { loadingBooks && <Loader /> }
        { books.length
          ? renderBooks(filterBooks(searchBooks(books, searchText), filterValue))
          : ''}
      </div>
    </>
  );
};

export default BookCatalog;
