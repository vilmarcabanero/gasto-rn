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
  registerIcon: {
    paddingRight: 10,
  },
  inputGroup: {
    position: 'relative',
    marginBottom: 10,
  },
  nameInputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  firstNameInputGroup: {
    position: 'relative',
    width: '49%',
  },
  lastNameInputGroup: {
    position: 'relative',
    width: '49%',
  },
  nameInput: {
    // width: '50%',
    backgroundColor: 'transparent',
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
  submit: {marginTop: 15, marginBottom: 15},
});

export default styles;
