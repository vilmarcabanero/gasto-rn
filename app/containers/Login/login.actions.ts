/*
 * Reducer actions related with Login
 */
import * as Types from './login.types';

export function login(loginPayload: object) {
  return {
    type: Types.LOGIN,
    loginPayload,
  };
}

export function logout() {
  return {
    type: Types.LOGOUT,
  };
}

export function loginLoading(isLoading: boolean) {
  return {
    type: Types.LOGIN_LOADING,
    isLoading,
  };
}

export function setLoginStatus(isLoggedIn: boolean) {
  return {
    type: Types.SET_LOGIN_STATUS,
    isLoggedIn,
  };
}

export function getLoginStatus() {
  return {
    type: Types.GET_LOGIN_STATUS,
  };
}

export function loginErrorEmail(error: string) {
  return {
    type: Types.LOGIN_ERROR_EMAIL,
    error,
  };
}

export function loginErrorPassword(error: string) {
  return {
    type: Types.LOGIN_ERROR_PASSWORD,
    error,
  };
}

export function togglePasswordVisibility(toggle: boolean) {
  return {
    type: Types.TOGGLE_PASSWORD_VISIBILITY,
    toggle,
  };
}
