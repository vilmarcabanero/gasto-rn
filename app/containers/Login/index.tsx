/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {
  Button,
  Text,
  TextInput,
  useTheme,
  IconButton,
  Surface,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSelector, useDispatch} from 'react-redux';
import styles from './login.styles';
import * as Actions from './login.actions';
import {useFocusEffect} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

export default function Login(props: any) {
  const {navigation} = props;
  const {isLoading, emailError, passwordError, passwordTextIsShown} =
    useSelector((state: any) => state.loginReducer);
  const dispatch = useDispatch();

  const {colors} = useTheme();

  const [loginPayload, setLoginPayload] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    dispatch(Actions.togglePasswordVisibility(true));
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(Actions.loginErrorPassword(''));
      dispatch(Actions.loginErrorEmail(''));
      SplashScreen.hide();
      return () => {
        // console.warn('Leaving');
      };
    }, []),
  );

  return (
    <Surface style={styles.container}>
      <Text style={styles.title}>
        <Icon name="account-lock" style={styles.loginIcon} size={30} /> Login
      </Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.email}
          label="Email"
          error={emailError}
          value={loginPayload.email}
          onChangeText={text => setLoginPayload({...loginPayload, email: text})}
        />
        <Text style={[styles.error, {color: colors.error}]}>{emailError}</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.password}
          label="Password"
          error={passwordError}
          value={loginPayload.password}
          secureTextEntry={passwordTextIsShown}
          onChangeText={text =>
            setLoginPayload({...loginPayload, password: text})
          }
        />
        <Text style={[styles.error, {color: colors.error}]}>
          {passwordError}
        </Text>
        <IconButton
          icon={passwordTextIsShown ? 'eye-off' : 'eye'}
          style={styles.eyeIcon}
          size={20}
          onPress={() =>
            dispatch(Actions.togglePasswordVisibility(!passwordTextIsShown))
          }
        />
      </View>
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => Alert.alert('')}>
        <Text>Forgot password?</Text>
      </TouchableOpacity>
      <Button
        style={styles.submit}
        icon="login"
        mode="contained"
        uppercase={false}
        dark={true}
        loading={isLoading}
        onPress={() => dispatch(Actions.login(loginPayload))}>
        Login
      </Button>
      <TouchableOpacity
        style={styles.notRegistered}
        onPress={() => navigation.navigate('Register')}>
        <Text>Not yet registered?</Text>
      </TouchableOpacity>
    </Surface>
  );
}
