/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */
import {all} from 'redux-saga/effects';
import {loginSagas} from './containers/Login/login.sagas';
import {userSagas} from './containers/User/user.sagas';
import {registerSagas} from './containers/Register/register.sagas';

// export default [loginSaga];

export default function* rootSaga() {
  yield all([...loginSagas, ...userSagas, ...registerSagas]);
}
