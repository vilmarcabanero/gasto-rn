/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {withTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import * as LoginActions from '../containers/Login/login.actions';
import * as UserActions from '../containers/User/user.actions';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Dummy from '../containers/Dummy';
import User from '../containers/User';

import {
  golobalOptions,
  homeOptions,
  loginOptions,
  registerOptions,
} from './options';

const Stack = createNativeStackNavigator();

function App(props: any) {
  const {colors} = props.theme;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(LoginActions.getLoginStatus());
    dispatch(UserActions.getDarkModeStatus());
  }, []);

  const {isLoggedIn} = useSelector((state: any) => state.loginReducer);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={golobalOptions(colors)}>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={homeOptions()}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={loginOptions}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={registerOptions}
            />
          </>
        )}

        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Dummy" component={Dummy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withTheme(App);
