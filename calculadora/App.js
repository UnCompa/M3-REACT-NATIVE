import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
export default function App() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Calculadora</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValor1(parseFloat(text))}
        value={valor1.toString()}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValor2(parseFloat(text))}
        value={valor2.toString()}
      />
      <Text style={{ color: "white" }}>Resultado: {resultado}</Text>
      <Button
        title="Sumar"
        onPress={() => {
          setResultado(valor1 + valor2);
        }}
      />
      <Button
        title="Restar"
        onPress={() => {
          setResultado(valor1 - valor2);
        }}
      />
      <Button
        title="Multiplicar"
        onPress={() => {
          setResultado(valor1 * valor2);
        }}
      />
      <Button
        title="Dividir"
        onPress={() => {
          setResultado(valor1 / valor2);
        }}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
    gap: 4
  },
  input: {
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    paddingHorizontal: 32,
    textAlign: "center",
  },
});
