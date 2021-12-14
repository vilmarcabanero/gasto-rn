/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Text, Button, Surface} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';

import {useSelector, useDispatch} from 'react-redux';
import styles from './user.styles';
import * as Actions from './user.actions';

export default function User(props: any) {
  const dispatch = useDispatch();
  const {userDetails} = useSelector((state: any) => state.userReducer);
  const {navigation} = props;

  useFocusEffect(
    React.useCallback(() => {
      dispatch(Actions.getUser());
      // SplashScreen.hide();
      // console.warn('Entering');
      return () => {
        // console.warn('Leaving');
      };
    }, []),
  );

  return (
    <Surface style={styles.container}>
      <Text>I'm {userDetails.firstName}</Text>
      <Button
        mode="contained"
        uppercase={false}
        dark={true}
        onPress={() => navigation.popToTop()}>
        Go to home
      </Button>
    </Surface>
  );
}
