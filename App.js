import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title="BUTTON"
            color="#999999"
            onPress={() => Alert.alert("THE BUTTON WAS PRESSED!")}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="BUTTON"
            color="#999999"
            onPress={() => Alert.alert("THE BUTTON WAS PRESSED!")}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="BUTTON"
            color="#999999"
            onPress={() => Alert.alert("THE BUTTON WAS PRESSED!")}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="BUTTON"
            color="#999999"
            onPress={() => Alert.alert("THE BUTTON WAS PRESSED!")}
          />
        </View>
        <StatusBar style="auto" />
      </View>
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
  parentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: '15%',
    marginVertical: '4%',
  }
});

