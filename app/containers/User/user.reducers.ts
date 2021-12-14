/* User Reducer
 * handles User states in the app
 */
import createReducer from '../../createReducer';
import * as Types from './user.types';

export const initialState = {
  userDetails: {},
  userDetailsState: null,
  isDark: false,
};

export const userReducer: any = createReducer(initialState, {
  [Types.SET_USER](state: any, {userDetails}: any) {
    return {
      ...state,
      userDetails: {...userDetails},
    };
  },
  [Types.IS_USER_DETAILS_STATE_CHANGED](state: object) {
    return {
      ...state,
      userDetailsState: Math.random(),
    };
  },
  [Types.TOGGLE_DARK_MODE](state: any, {isDark}: any) {
    return {
      ...state,
      isDark,
    };
  },
});
