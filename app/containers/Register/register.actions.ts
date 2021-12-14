/*
 * Reducer actions related with Register
 */
import * as Types from './register.types';

export function register(registerPayload: object, confirmPassword: string) {
  return {
    type: Types.REGISTER,
    registerPayload,
    confirmPassword,
  };
}

export function registerLoading(isLoading: boolean) {
  return {
    type: Types.REGISTER_LOADING,
    isLoading,
  };
}

export function togglePasswordVisibility(toggle: boolean) {
  return {
    type: Types.TOGGLE_PASSWORD_VISIBILITY,
    toggle,
  };
}

export function toggleConfirmPasswordVisibility(toggle: boolean) {
  return {
    type: Types.TOGGLE_CONFIRM_PASSWORD_VISIBILITY,
    toggle,
  };
}

export function registerErrorFirstName(firstNameError: any) {
  return {
    type: Types.REGISTER_ERROR_FIRST_NAME,
    firstNameError,
  };
}

export function registerErrorLastName(lastNameError: any) {
  return {
    type: Types.REGISTER_ERROR_LAST_NAME,
    lastNameError,
  };
}

export function registerErrorEmail(emailError: any) {
  return {
    type: Types.REGISTER_ERROR_EMAIL,
    emailError,
  };
}

export function registerErrorPassword(passwordError: any) {
  return {
    type: Types.REGISTER_ERROR_PASSWORD,
    passwordError,
  };
}

export function registerErrorConfirmPassword(confirmPasswordError: any) {
  return {
    type: Types.REGISTER_ERROR_CONFIRM_PASSWORD,
    confirmPasswordError,
  };
}
