import {API} from '../config';
import AsyncStorage from '@react-native-community/async-storage';

import WebServices from './WebServices';

export default function* createAPI(): any {
  const api = WebServices(API.SERVER.WEBSERVICES.OPTIONS);
  const token = yield AsyncStorage.getItem('authToken');
  api.setHeader('Authorization', `Bearer ${token}`);
  return api;
}
