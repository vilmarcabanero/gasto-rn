import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: '20%',
    paddingRight: 20,
    paddingLeft: 20,
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    fontSize: 24,
  },
  loginIcon: {
    paddingRight: 10,
  },
  inputGroup: {
    position: 'relative',
    marginBottom: 10,
  },
  email: {
    backgroundColor: 'transparent',
  },
  password: {
    backgroundColor: 'transparent',
  },
  error: {
    position: 'absolute',
    bottom: -15,
    fontSize: 12,
    left: 13,
  },
  eyeIcon: {
    right: 0,
    position: 'absolute',
    bottom: 0,
  },
  forgotPassword: {
    marginBottom: 18,
    left: 12,
    width: 200,
  },
  notRegistered: {
    right: -195,
    width: 200,
  },
  submit: {marginBottom: 15},
});

export default styles;
