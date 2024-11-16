import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Input } from "@rneui/base";
import { addNota, updateNota } from "../services/GradeService";

const GradeForm = ({navigation, route}) => {
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("0");
  const [errorSubject, setErrorSubject] = useState("");
  const [errorGrade, setErrorGrade] = useState("");
  const [isNew, setIsNew] = useState(true)
  const { params } = route;
  useEffect(() => {
  if (params?.nota) {
    setIsNew(false);
    setGrade(params.nota.grade);
    setSubject(params.nota.subject);
    console.log(route.params.nota.grade);
  }
  },[])
  const save = () => {
    validate()
    if (isNew) {
      addNota({ subject, grade: parseFloat(grade) })
      navigation.navigate("ListGradeNav")
    } else {
      updateNota({subject, grade: parseFloat(grade) })
      navigation.navigate("ListGradeNav")
    }
    setSubject("");
    setGrade("");
  }
  const validate = () => {
    if (subject.trim() === "") {
      setErrorSubject("El curso es obligatorio");
    }
    if (parseFloat(grade) <= 0 || parseFloat(grade) > 10) {
      setErrorGrade("La nota debe estar entre 1 y 100");
    }
    setErrorSubject("");
    setErrorGrade("")
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Registra tu nota</Text>
      <Input value={subject} disabled={!isNew} placeholder="Ingrese el curso" errorMessage={errorSubject} onChangeText={(text) => setSubject(text)} />
      <Input value={grade} placeholder="Ingrese la nota" errorMessage={errorGrade} onChangeText={(text) => setGrade(text)} />
      <Button
        title={isNew ? "GUARDAR" : "ACTUALIZAR"}
        icon={{
          name: "save",
          type: "feather",
          size: 24,
          color: "white",
        }}
        color={isNew ? "primary" : "success"}
        onPress={save}
      />
    </View>
  );
};

export default GradeForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
