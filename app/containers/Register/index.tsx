/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
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
import styles from './register.styles';
import * as Actions from './register.actions';
import {useFocusEffect} from '@react-navigation/native';

export default function Login(props: any) {
  const {navigation} = props;
  const {
    isLoading,
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    confirmPasswordError,
    passwordTextIsShown,
    confirmPasswordTextIsShown,
  } = useSelector((state: any) => state.registerReducer);
  const dispatch = useDispatch();

  const {colors} = useTheme();

  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerPayload, setRegisterPayload] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  useFocusEffect(
    React.useCallback(() => {
      dispatch(Actions.registerErrorFirstName(''));
      dispatch(Actions.registerErrorLastName(''));
      dispatch(Actions.registerErrorEmail(''));
      dispatch(Actions.registerErrorPassword(''));
      dispatch(Actions.registerErrorConfirmPassword(''));
      dispatch(Actions.togglePasswordVisibility(true));
      dispatch(Actions.toggleConfirmPasswordVisibility(true));
      return () => {
        // console.warn('Leaving');
      };
    }, []),
  );

  return (
    <Surface style={styles.container}>
      <Text style={styles.title}>
        <Icon name="account" style={styles.registerIcon} size={30} /> Register
      </Text>
      <View style={styles.nameInputGroup}>
        <View style={styles.firstNameInputGroup}>
          <TextInput
            style={styles.nameInput}
            label="First Name"
            error={firstNameError}
            value={registerPayload.firstName}
            onChangeText={text =>
              setRegisterPayload({...registerPayload, firstName: text})
            }
          />
          <Text style={[styles.error, {color: colors.error}]}>
            {firstNameError}
          </Text>
        </View>
        <View style={styles.lastNameInputGroup}>
          <TextInput
            style={styles.nameInput}
            label="Last Name"
            error={lastNameError}
            value={registerPayload.lastName}
            onChangeText={text =>
              setRegisterPayload({...registerPayload, lastName: text})
            }
          />
          <Text style={[styles.error, {color: colors.error}]}>
            {lastNameError}
          </Text>
        </View>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.email}
          label="Email"
          error={emailError}
          value={registerPayload.email}
          onChangeText={text =>
            setRegisterPayload({...registerPayload, email: text})
          }
        />
        <Text style={[styles.error, {color: colors.error}]}>{emailError}</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.password}
          label="Password"
          error={passwordError}
          value={registerPayload.password}
          secureTextEntry={passwordTextIsShown}
          onChangeText={text =>
            setRegisterPayload({...registerPayload, password: text})
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
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.password}
          label="Confirm Password"
          error={confirmPasswordError}
          value={confirmPassword}
          secureTextEntry={confirmPasswordTextIsShown}
          onChangeText={text => setConfirmPassword(text)}
        />
        <Text style={[styles.error, {color: colors.error}]}>
          {confirmPasswordError}
        </Text>
        <IconButton
          icon={confirmPasswordTextIsShown ? 'eye-off' : 'eye'}
          style={styles.eyeIcon}
          size={20}
          onPress={() =>
            dispatch(
              Actions.toggleConfirmPasswordVisibility(
                !confirmPasswordTextIsShown,
              ),
            )
          }
        />
      </View>
      <Button
        style={styles.submit}
        icon="login"
        mode="contained"
        uppercase={false}
        dark={true}
        loading={isLoading}
        onPress={() =>
          dispatch(Actions.register(registerPayload, confirmPassword))
        }>
        Register
      </Button>
      <TouchableOpacity
        style={styles.notRegistered}
        onPress={() => navigation.navigate('Login')}>
        <Text>Already registered?</Text>
      </TouchableOpacity>
    </Surface>
  );
}
