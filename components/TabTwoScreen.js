import { useSelector } from 'react-redux';

export default function TabTwoScreen() {
  // We use the useSelector hook to access the balance state from the store
  const balance = useSelector((state) => state.balance.value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Current Balance: {balance}$</Text>
      </View>
    </View>
  );
}