/* Login Reducer
 * handles Login states in the app
 */
import createReducer from '../../createReducer';
import * as Types from './login.types';

export const initialState = {
  isLoggedIn: true,
  isLoading: false,
  emailError: '',
  passwordError: '',
  passwordTextIsShown: true,
};

export const loginReducer = createReducer(initialState, {
  [Types.SET_LOGIN_STATUS](state: any, {isLoggedIn}: any) {
    return {
      ...state,
      isLoggedIn,
    };
  },
  [Types.LOGIN_LOADING](state: any, {isLoading}: any) {
    return {
      ...state,
      isLoading,
    };
  },
  [Types.LOGIN_ERROR_EMAIL](state: any, {error}: any) {
    return {
      ...state,
      emailError: error,
    };
  },
  [Types.LOGIN_ERROR_PASSWORD](state: any, {error}: any) {
    return {
      ...state,
      passwordError: error,
    };
  },
  [Types.TOGGLE_PASSWORD_VISIBILITY](state: any, {toggle}: any) {
    return {
      ...state,
      passwordTextIsShown: toggle,
    };
  },
});
