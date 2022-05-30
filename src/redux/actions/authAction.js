export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const receiveRegister = () => {
  return {type: REGISTER_SUCCESS};
};
export const receiveLogin = () => {
  return {type: LOGIN_SUCCESS};
};

export const register = () => dispatch => {};
export const login = () => dispatch => {};
export const verifyUser = () => dispatch => {};
export const logout = () => dispatch => {};
