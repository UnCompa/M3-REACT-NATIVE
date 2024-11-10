import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [resLabel, setResLabel] = useState("");

  const calcularIMC = () => {
    if (peso && altura) {
      const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
      setResultado(imc.toFixed(2));
      if (imc < 18.5) {
        setResLabel("Delgado");
      } else if (imc >= 18.5 && imc < 24.9) {
        setResLabel("Normal");
      } else if (imc >= 25 && imc <= 29) {
        setResLabel("con Sobrepeso");
      } else if (imc >= 30 && imc <= 34.9) {
        setResLabel("con Obesidad I");
      } else if (imc >= 35 && imc <= 40) {
        setResLabel("con Obesidad II");
      } else {
        setResLabel("con Obesidad III");
      }
    } else {
      setResultado("");
      setResLabel("");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}> IMCalculadoraC</Text>
      <TextInput
        style={styles.inputStyle}
        value={peso}
        onChangeText={(text) => setPeso(text)}
        placeholder="Peso (KG)"
      />
      <TextInput
        style={styles.inputStyle}
        value={altura}
        onChangeText={(text) => setAltura(text)}
        placeholder="Altura (M)"
      />
      <Button onPress={calcularIMC} title="Calcular" color="#0af"></Button>
      <Text style={styles.text}>Su resultado es: {resultado}</Text>
      <Text style={styles.text}>Usted esta: {resLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    paddingVertical: 6,
  },
});
