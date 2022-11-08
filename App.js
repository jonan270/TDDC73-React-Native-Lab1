import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <Button
        title="BUTTON"
        color="#999999"
        onPress={() => Alert.alert("THE BUTTON WAS PRESSED!")}
      />
      <Button
        title="BUTTON"
        color="#999999"
        onPress={() => Alert.alert("THE BUTTON WAS PRESSED!")}
      />
      <Button
        title="BUTTON"
        color="#999999"
        onPress={() => Alert.alert("THE BUTTON WAS PRESSED!")}
      />
      <Button
        title="BUTTON"
        color="#999999"
        onPress={() => Alert.alert("THE BUTTON WAS PRESSED!")}
      />
      <StatusBar style="auto" />
    </View>
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

