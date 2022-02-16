import React, {useEffect, useState} from 'react';
import AppNavigator from './src/Routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StoreProvider} from 'react-redux';
import {store, persistor} from './src/Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import NetInfo from '@react-native-community/netinfo';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [isInternet, setIsInternet] = useState<boolean>(true);
  useEffect(() => {
    NetInfo.addEventListener(state => {
      if (state.isConnected && state.isInternetReachable !== false) {
        setIsInternet(true);
      } else {
        setIsInternet(false);
      }
    });
  }, []);
  return (
    <SafeAreaProvider>
      {isInternet ? (
        <StoreProvider store={store}>
          <PersistGate persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </StoreProvider>
      ) : (
        <View style={styles.noInternet}>
          <Text style={styles.text}>No internet Connection!</Text>
        </View>
      )}
    </SafeAreaProvider>
  );
};
export default App;
const styles = StyleSheet.create({
  noInternet: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 30},
});
