import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import styles from './styles';

export default function Dummy(props: any) {
  const {navigation} = props;
  return (
    <Surface style={styles.container}>
      <Text>Dummy Screen</Text>
      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <Text>Go to home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('User')}>
        <Text>Go to my profile</Text>
      </TouchableOpacity>
    </Surface>
  );
}
