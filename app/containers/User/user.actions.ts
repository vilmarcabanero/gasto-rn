/*
 * Reducer actions related with User
 */
import * as Types from './user.types';

export function setUser(userDetails: any) {
  return {
    type: Types.SET_USER,
    userDetails,
  };
}

export function getUser() {
  return {
    type: Types.GET_USER,
  };
}

export function isUserDetailsStateChanged() {
  return {
    type: Types.IS_USER_DETAILS_STATE_CHANGED,
  };
}

export function toggleDarkMode(isDark: boolean) {
  return {
    type: Types.TOGGLE_DARK_MODE,
    isDark,
  };
}

export function getDarkModeStatus() {
  return {
    type: Types.GET_DARK_MODE_STATUS,
  };
}
