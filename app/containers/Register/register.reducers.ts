/* Register Reducer
 * handles Register states in the app
 */
import createReducer from '../../createReducer';
import * as Types from './register.types';

export const initialState = {
  isLoading: false,
  registerErrorMessage: {},
  firstNameError: '',
  lastNameError: '',
  emailError: '',
  passwordError: '',
  confirmPasswordError: '',
  passwordTextIsShown: true,
  confirmPasswordTextIsShown: true,
};

export const registerReducer = createReducer(initialState, {
  [Types.REGISTER_LOADING](state: any, {isLoading}: any) {
    return {
      ...state,
      isLoading,
    };
  },
  [Types.TOGGLE_PASSWORD_VISIBILITY](state: any, {toggle}: any) {
    return {
      ...state,
      passwordTextIsShown: toggle,
    };
  },
  [Types.TOGGLE_CONFIRM_PASSWORD_VISIBILITY](state: any, {toggle}: any) {
    return {
      ...state,
      confirmPasswordTextIsShown: toggle,
    };
  },
  [Types.REGISTER_ERROR_FIRST_NAME](state: any, {firstNameError}: any) {
    return {
      ...state,
      firstNameError: firstNameError,
    };
  },
  [Types.REGISTER_ERROR_LAST_NAME](state: any, {lastNameError}: any) {
    return {
      ...state,
      lastNameError,
    };
  },
  [Types.REGISTER_ERROR_EMAIL](state: any, {emailError}: any) {
    return {
      ...state,
      emailError,
    };
  },
  [Types.REGISTER_ERROR_PASSWORD](state: any, {passwordError}: any) {
    return {
      ...state,
      passwordError,
    };
  },
  [Types.REGISTER_ERROR_CONFIRM_PASSWORD](
    state: any,
    {confirmPasswordError}: any,
  ) {
    return {
      ...state,
      confirmPasswordError,
    };
  },
});
