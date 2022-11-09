import { StatusBar } from 'expo-status-bar';
import PieChart from "./assets/piechart.png";
import { StyleSheet, Text, View, Button, Alert, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={PieChart}
          style={{
            resizeMode: "center",
            height: 300
          }}
        />
      </View>
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
      <View style={styles.inputContainer}>
        <Text>Email:</Text>
        <TextInput style={styles.input}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imageContainer: {
    margin: '5%',
    marginTop: '0%',
    alignSelf: 'center',
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
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    alignSelf: 'center',
    height: 60,
    width: 200,
    margin: 40,
    borderBottomWidth: 3,
    borderColor: '#c71585',
    padding: 0,
  },
});

