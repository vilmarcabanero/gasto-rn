/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider, useSelector} from 'react-redux';
import Navigator from './navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import {PaperThemeDark, PaperThemeDefault} from './theme';
import configureStore from './store';
const {store} = configureStore();

function RootNavigation() {
  const {isDark} = useSelector((state: any) => state.userReducer);
  // const isDark = false;
  const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;

  return (
    <PaperProvider theme={paperTheme}>
      <Navigator />
    </PaperProvider>
  );
}

export default function Entrypoint() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
