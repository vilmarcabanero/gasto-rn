import {call, put, takeLatest} from 'redux-saga/effects';
import createAPI from '../../api/createAPI';
import * as Actions from './login.actions';
import * as Types from './login.types';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {validateEmail} from '../../utils/validator';

function* makeLogin(actions: any): any {
  const {loginPayload} = actions;
  yield put(Actions.loginErrorPassword(''));
  yield put(Actions.loginErrorEmail(''));
  if (!loginPayload.email.length) {
    yield put(Actions.loginErrorEmail("Email can't be empty"));
  } else if (!validateEmail(loginPayload.email)) {
    yield put(Actions.loginErrorEmail('Valid email is required.'));
  } else if (!loginPayload.password.length) {
    yield put(Actions.loginErrorPassword("Password can't be empty"));
  } else {
    yield put(Actions.loginLoading(true));
    const api = yield createAPI();
    const response = yield call(api.call, 'login', loginPayload);
    yield put(Actions.loginLoading(false));
    if (response.ok) {
      yield put(Actions.setLoginStatus(true));
      yield AsyncStorage.setItem('authToken', response.data.accessToken);
    } else {
      if (!response.data) {
        //No connection
        Alert.alert('Please connect to internet.');
      } else if (response.data.message === 'invalid-password') {
        yield put(Actions.loginErrorPassword('Password is incorrect.'));
      } else if (response.data.message === 'not-registered') {
        yield put(Actions.loginErrorEmail('Email is not yet registered.'));
      } else {
        Alert.alert('Something went wrong');
      }
      yield put(Actions.setLoginStatus(false));
    }
  }
}

function* makeLogout() {
  yield put(Actions.setLoginStatus(false));
  yield AsyncStorage.removeItem('authToken');
}

function* makeGetLoginStatus(): any {
  const isLoggedIn = (yield AsyncStorage.getItem('authToken')) ? true : false;
  yield put(Actions.setLoginStatus(isLoggedIn));
}

export const loginSagas = [
  takeLatest(Types.LOGIN, makeLogin),
  takeLatest(Types.LOGOUT, makeLogout),
  takeLatest(Types.GET_LOGIN_STATUS, makeGetLoginStatus),
];
