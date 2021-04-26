import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import { TagsFill as TagsIcon } from 'react-bootstrap-icons';
import { loadBook } from '../../store/books/actions';
import { addBookToCart } from '../../store/cart/actions';
import Header from '../Header';
import Loader from '../../components/Loader';
import './styles.scss';

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.openedBook.data);
  const loadingBook = useSelector((state) => state.books.openedBook.isLoading);
  const [countValue, setCountValue] = useState(1);
  const [totalPrice, setTotalPrice] = useState(book.price);
  const [isSuccessTextShown, setIsSuccessTextShown] = useState(false);
  let timer;

  useEffect(() => {
    if (book._id !== id) {
      dispatch(loadBook(id));
    }
  }, [id]);

  useEffect(() => {
    setTotalPrice(book.price);
  }, [book]);

  useEffect(() => () => {
    clearTimeout(timer);
  }, [book]);

  const convertTagsToString = (tags) => (tags
    ? tags.map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1)).join(', ')
    : '');

  const countTotalPrice = (price, count) => Number((price * count).toFixed(2));

  const isCountValid = (value) => value > 0 && value < 1000;

  const changeCount = (e) => {
    const { value } = e.target;
    const numericValue = Number(value);

    if (isCountValid(numericValue)) {
      setCountValue(numericValue);
      setTotalPrice(countTotalPrice(book.price, numericValue));
    }
  };

  const addToCart = (e) => {
    e.preventDefault();
    setIsSuccessTextShown(false);

    dispatch(addBookToCart({
      id: book._id,
      title: book.title,
      price: book.price,
      count: countValue,
      totalPrice,
    }));

    setCountValue(1);
    setTotalPrice(book.price);
    setIsSuccessTextShown(true);
    timer = setTimeout(() => setIsSuccessTextShown(false), 3000);
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        { loadingBook
          ? <Loader />
          : (
            <div className="book-details">
              <div className="book-info">
                <div className="book-info__col">
                  <img className="book-info__image" src={book.cover} alt="book cover" />
                  <p data-testid="book-details-description">{book.description}</p>
                </div>
                <div className="book-info__col">
                  <h5 data-testid="book-details-title">{book.title}</h5>
                  <p className="text-muted" data-testid="book-details-author">{book.author}</p>
                  <div data-testid="book-details-tags">
                    <TagsIcon className="mr-2" />
                    {convertTagsToString(book.tags)}
                  </div>
                </div>
              </div>
              <Form className="book-buy" onSubmit={addToCart}>
                <Form.Group as={Row} controlId="formPlaintextPrice">
                  <Form.Label column>
                    Price, $:
                  </Form.Label>
                  <Col>
                    <Form.Control plaintext readOnly defaultValue={book.price} className="text-right" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column xs="8">Count:</Form.Label>
                  <Col xs="4">
                    <Form.Control
                      className="book-count-select"
                      value={countValue}
                      onChange={changeCount}
                      type="number"
                      min="1"
                      size="sm"
                      data-testid="book-details-count"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextTotalPrice">
                  <Form.Label column>Total price, $:</Form.Label>
                  <Col>
                    <Form.Control plaintext readOnly defaultValue={totalPrice} className="text-right" />
                  </Col>
                </Form.Group>
                { isSuccessTextShown && (
                <Form.Text className="text-success text-center mb-4">
                  Item was successfully added to the cart.
                </Form.Text>
                )}
                <div className="book-add-button">
                  <Button variant="secondary" type="submit" size="sm" disabled={isSuccessTextShown}>Add To Cart</Button>
                </div>
              </Form>
            </div>
          )}
      </div>
    </>
  );
};

export default BookDetails;
