import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {useState} from 'react'
export default function App() {
  const [money, setMoney] = useState(0)
  const [resultado, setResultado] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convertidor</Text>
      <TextInput 
      style={styles.textInput}
        onChangeText={text => setMoney(text)}
        value={money}
      ></TextInput>
      <Text>La conversion es: {resultado}</Text>
      <View>
        <Button
          title="PESOS MEXICANOS"
          onPress={() => {
            setResultado(parseInt(money) * 19.31)
          }}
        />
        <Button
          title="PESOS COLOMBIANOS"
          onPress={() => {
            setResultado(parseInt(money) * 4196.81)
          }}
        />
        <Button
          title="EUROS"
          onPress={() => {
            setResultado(parseInt(money) * 0.91)
          }}
        />
      </View>
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
  textInput: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  }
});
