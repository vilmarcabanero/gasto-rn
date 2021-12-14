/*
 * combines all th existing reducers
 */
import * as userReducer from './containers/User/user.reducers';
import * as loginReducer from './containers/Login/login.reducers';
import * as registerReducer from './containers/Register/register.reducers';
export default Object.assign({}, userReducer, loginReducer, registerReducer);
