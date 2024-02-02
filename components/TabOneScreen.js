import { StyleSheet, Button, Text, View } from 'react-native';
// import { Text, View } from '../components/Themed';
// import { RootTabScreenProps } from '../types';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw } from '../reduxState/balanceSlice';

export default function TabOneScreen() {
  const balance = useSelector((state) => state.balance.value);
  // We use the useDispatch hook to dispatch actions to the store
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={{ marginVertical: 40 }}>
        <Button title="Deposit 10$" onPress={() => {
            // We dispatch the deposit action to the store with payload 10
            dispatch(deposit(10));
        }} />
        <Button title="Withdraw 10$" onPress={() => {
            // We dispatch the withdraw action to the store with payload 10
            dispatch(withdraw(10));
        }} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Current Balance: {balance}$</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});