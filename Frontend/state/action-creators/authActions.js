import * as actionTypes from '../actionTypes';

export const setName = (name) => ({
  type: actionTypes.SET_NAME,
  payload: name,
});

export const setEmail = (email) => ({
  type: actionTypes.SET_EMAIL,
  payload: email,
});

export const setPassword = (password) => ({
  type: actionTypes.SET_PASSWORD,
  payload: password,
});

export const setError = (error) => ({
  type: actionTypes.SET_ERROR,
  payload: error,
});

export const setEmailValid = (isValid) => ({
  type: actionTypes.SET_EMAIL_VALID,
  payload: isValid,
});

export const setEmailErrorMessage = (message) => ({
  type: actionTypes.SET_EMAIL_ERROR_MESSAGE,
  payload: message,
});

export const clearCredentials = () => ({
  type: actionTypes.CLEAR_CREDENTIALS,
});
