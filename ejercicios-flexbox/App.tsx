import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.gloabalContainer}>
      <View style={styles.headerContainer}>
        <Button title="X"></Button>
        <Button title="Y"></Button>
        <Button title="Z"></Button>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.sectionContainer}>
          <View style={styles.colum1}>
            <Button title="Button 1"></Button>
            <Button title="Button 2"></Button>
          </View>
          <View style={styles.colum2}>
            <Button title="Operacion 1"></Button>
            <Button title="Operacion 2"></Button>
            <Button title="Operacion 3"></Button>
          </View>
        </View>
        <View style={styles.articleContainer}>
          <Button title="Accion 1"></Button>
          <Button title="Accion 2"></Button>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Button title="Boton final"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gloabalContainer: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#0af",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mainContainer: {
    flex: 6,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionContainer: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  colum1: {
    flex: 1,
    height: "100%",
    backgroundColor: "#123289",
    alignItems: "center",
    justifyContent: "space-around",
  },
  colum2: {
    flex: 1,
    height: "100%",
    backgroundColor: "#321178",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  articleContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
});
