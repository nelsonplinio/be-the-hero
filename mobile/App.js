import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
import Routes from './src/routes';

// eslint-disable-next-line no-console
console.disableYellowBox = true;
export default function App() {
  return (
    <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
      <Routes />
    </SafeAreaProvider>
  );
}
