import {call, put, takeLatest} from 'redux-saga/effects';
import createAPI from '../../api/createAPI';
import * as Actions from './user.actions';
import * as LoginActions from '../Login/login.actions';
import * as Types from './user.types';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';

function* makeGetUser(): any {
  const api = yield createAPI();
  const response = yield call(api.call, 'getUser');
  if (response.ok) {
    yield put(Actions.setUser(response.data));
  } else {
    if (!response.data) {
      //No data
      Alert.alert('Please connect to the internet.');
    } else if (response.data.statusCode === 401) {
      yield put(LoginActions.setLoginStatus(false));
      // Alert.alert('Session expired. Please re-login.');
    }
  }
}

function* makeGetDarkModeStatus(): any {
  const isDarkString = yield AsyncStorage.getItem('isDark');
  const isDark = isDarkString === null ? false : JSON.parse(isDarkString);
  yield put(Actions.toggleDarkMode(isDark));
  SplashScreen.hide();
}

export const userSagas = [
  takeLatest(Types.GET_USER, makeGetUser),
  takeLatest(Types.GET_DARK_MODE_STATUS, makeGetDarkModeStatus),
];
