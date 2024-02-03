import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from "./reduxState/store";
import { Provider } from "react-redux";
// import TabOneScreen from './components/TabOneScreen';
// import TabTwoScreen from './components/TabTwoScreen';
import { MyStack } from './components/myStack';
import { DrawerNavigator } from "./components/drawer";
import Drawer from "./components/drawer2";

export default function App() {
  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <TabOneScreen />
      </View> */}
      <StatusBar style="auto" />
      {/* <MyStack /> */}
      <DrawerNavigator />
      {/* <Drawer /> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
