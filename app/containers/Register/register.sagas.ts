import {call, put, takeLatest} from 'redux-saga/effects';
import createAPI from '../../api/createAPI';
import * as Actions from './register.actions';
import * as LoginActions from '../Login/login.actions';
import * as Types from './register.types';
import {validateEmail} from '../../utils/validator';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

function* makeRegister(actions: any): any {
  const {registerPayload, confirmPassword} = actions;
  yield put(Actions.registerErrorFirstName(''));
  yield put(Actions.registerErrorLastName(''));
  yield put(Actions.registerErrorEmail(''));
  yield put(Actions.registerErrorPassword(''));
  yield put(Actions.registerErrorConfirmPassword(''));
  if (!registerPayload.firstName.length) {
    yield put(Actions.registerErrorFirstName("First name can't be empty"));
  } else if (!registerPayload.lastName.length) {
    yield put(Actions.registerErrorLastName("Last name can't be empty"));
  } else if (!registerPayload.email.length) {
    yield put(Actions.registerErrorEmail("Email can't be empty."));
  } else if (!validateEmail(registerPayload.email)) {
    yield put(Actions.registerErrorEmail('Valid email is required.'));
  } else if (!registerPayload.password.length) {
    yield put(Actions.registerErrorPassword("Password can't be empty."));
  } else if (registerPayload.password.length < 8) {
    yield put(
      Actions.registerErrorPassword(
        'Password must be at least 8 characters long.',
      ),
    );
  } else if (!confirmPassword.length) {
    yield put(
      Actions.registerErrorConfirmPassword('Please confirm your password.'),
    );
  } else if (registerPayload.password !== confirmPassword) {
    yield put(Actions.registerErrorPassword('Passwords do not match.'));
    yield put(Actions.registerErrorConfirmPassword('Passwords do not match.'));
  } else {
    yield put(Actions.registerLoading(true));
    const api = yield createAPI();
    const response = yield call(api.call, 'register', registerPayload);
    yield put(Actions.registerLoading(false));
    if (response.ok) {
      yield put(LoginActions.setLoginStatus(true));
      yield AsyncStorage.setItem('authToken', response.data.accessToken);
    } else {
      if (!response.data) {
        //No connection
        Alert.alert('Please connect to internet.');
      } else if (response.data.message === 'already-registered') {
        yield put(Actions.registerErrorEmail('Email is already registered.'));
      } else {
        Alert.alert('Something went wrong');
        console.warn(response.data);
      }
      yield put(LoginActions.setLoginStatus(false));
    }
  }
}

export const registerSagas = [takeLatest(Types.REGISTER, makeRegister)];
