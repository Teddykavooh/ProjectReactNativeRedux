import { useSelector } from 'react-redux';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function TabTwoScreen({ navigation }) {
  // We use the useSelector hook to access the balance state from the store
  const balance = useSelector((state) => state.balance.value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Current Balance: {balance}$</Text>
      </View>
      <View>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});