/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Text, Surface, Button} from 'react-native-paper';
import styles from './styles';
import * as LoginActions from '../Login/login.actions';
import * as UserActions from '../User/user.actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';

export default function Home(props: any) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {userDetails, isDark} = useSelector((state: any) => state.userReducer);
  const [connectionStatus, setConnectionStatus] = React.useState('');

  React.useEffect(() => {
    dispatch(UserActions.getUser());
  }, [connectionStatus]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(UserActions.getUser());
      // Subscribe
      const unsubscribe = NetInfo.addEventListener(state => {
        // console.warn('Connection type', state.type);
        setConnectionStatus(state.isConnected ? 'Connected' : 'Not connected');
      });
      // console.warn('Entering');
      return () => {
        // console.warn('Leaving');
        // Unsubscribe
        unsubscribe();
      };
    }, []),
  );

  function handleToggleDarkMode() {
    dispatch(UserActions.toggleDarkMode(!isDark));
    AsyncStorage.setItem('isDark', JSON.stringify(!isDark));
  }

  return (
    <Surface style={styles.container}>
      <Text>I'm {userDetails.firstName}</Text>
      <Button
        icon="login"
        mode="contained"
        uppercase={false}
        dark={true}
        onPress={() => dispatch(LoginActions.logout())}>
        Logout
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('Dummy')}>
        <Text>Go to dummy page</Text>
        <Icon name="rocket" size={30} color="#900" />
      </TouchableOpacity>
      <Button
        icon="login"
        mode="contained"
        uppercase={false}
        dark={true}
        onPress={handleToggleDarkMode}>
        Toggle Dark
      </Button>
    </Surface>
  );
}
