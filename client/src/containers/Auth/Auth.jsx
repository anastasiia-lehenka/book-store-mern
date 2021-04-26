import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Form, Alert } from 'react-bootstrap';
import { hideRegistrationMessage, logIn, register } from '../../store/auth/actions';
import { MAX_USERNAME_LENGTH, MIN_USERNAME_LENGTH } from '../../constants';
import './styles.scss';

const Auth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);
  const isAlertShown = useSelector((state) => state.auth.isRegistrationMessageShown);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [usernameValidationError, setUsernameValidationError] = useState(false);
  const [passwordValidationError, setPasswordValidationError] = useState(false);

  const isUsernameValid = (data) => {
    const string = data.trim();
    return string.length >= MIN_USERNAME_LENGTH && string.length <= MAX_USERNAME_LENGTH;
  };

  const isPasswordValid = (data) => {
    const regexPattern = /^[a-zA-Z0-9]{4,15}$/;
    return data.match(regexPattern);
  };

  const submitRegister = (e) => {
    e.preventDefault();

    if (!isUsernameValid(loginData.username)) {
      setUsernameValidationError(true);
      return;
    }

    if (!isPasswordValid(loginData.password)) {
      setPasswordValidationError(true);
      return;
    }

    dispatch(register(loginData));
    setLoginData({
      username: '',
      password: '',
    });
  };

  const submitLogIn = (e) => {
    e.preventDefault();

    dispatch(logIn(loginData));
  };

  const onUsernameChange = (e) => {
    setLoginData((prevValue) => ({
      ...prevValue,
      username: e.target.value,
    }));
    setUsernameValidationError(false);
  };

  const onPasswordChange = (e) => {
    setLoginData((prevValue) => ({
      ...prevValue,
      password: e.target.value,
    }));
    setPasswordValidationError(false);
  };

  const onCloseRegistrationMessage = () => {
    dispatch(hideRegistrationMessage());
  };

  return token
    ? <Redirect to="/catalog" />
    : (
      <div className="login-form-container wrapper">
        <Form className="login-form">
          { isAlertShown
          && (
          <Alert className="mb-5" variant="success" onClose={onCloseRegistrationMessage} dismissible>
            Registration successful.
          </Alert>
          ) }
          <h2 className="text-center mb-4">JS Band Store</h2>
          <Form.Group className="d-block">
            <Form.Label>Username</Form.Label>
            <Form.Control
              className={`login-form__input ${usernameValidationError ? 'is-invalid' : ''}`}
              type="text"
              placeholder="Enter username"
              name="username"
              value={loginData.username}
              onChange={onUsernameChange}
            />
            { usernameValidationError && (
            <Form.Text className="text-danger">
              Username is not valid. Username should be 4-15 characters long.
            </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="d-block">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className={`login-form__input ${passwordValidationError ? 'is-invalid' : ''}`}
              type="password"
              placeholder="Enter password"
              name="password"
              value={loginData.password}
              onChange={onPasswordChange}
            />
            { passwordValidationError && (
            <Form.Text className="text-danger">
              {/* eslint-disable-next-line max-len */}
              Password is not valid. Password should be 4-15 characters long and contain only letters and numbers.
            </Form.Text>
            )}
            { error && (
            <Form.Text className="text-danger mt-3">{error}</Form.Text>
            )}
          </Form.Group>
          <div className="mt-4">
            <Button className="mr-2" disabled={isLoading} variant="primary" onClick={submitLogIn}>
              Log In
            </Button>
            <Button disabled={isLoading} variant="secondary" onClick={submitRegister}>
              Register
            </Button>
          </div>
        </Form>
      </div>
    );
};

export default Auth;
