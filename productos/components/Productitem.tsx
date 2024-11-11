import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Productitem = ({ elemento, index, handleDelete, handleEdit }) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          padding: 10,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 14, textAlign: "center" }}>
          {index}
        </Text>
      </View>
      <View style={{ padding: 6, flex: 9 }}>
        <View style={styles.textPrimaryContainer}>
          <Text style={styles.textPrimary}>{elemento.item.nombre}</Text>
          <Text style={styles.textCategoria}>
            Categoria: {elemento.item.categoria}
          </Text>
          <Text style={styles.textSecondary}>
            ${elemento.item.precioVenta.toFixed(2)}
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: 10,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            flexDirection: "row",
            justifyContent: "center",
            padding: 6,
            borderRadius: 5,
          }}
          onPress={() => handleEdit(index)}
        >
          <Text style={{ color: "white" }}>E</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            flexDirection: "row",
            justifyContent: "center",
            padding: 6,
            borderRadius: 5,
          }}
          onPress={() => handleDelete(index)}
        >
          <Text style={{ color: "white" }}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Productitem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 64,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    borderRadius: 6,
    borderColor: "#9f9f9f",
    marginHorizontal: 32,
    margin: 6,
  },
  cardContainer: {
    margin: 4,
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
  },
  textPrimaryContainer: {
    flexDirection: "column",
  },
  textPrimary: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textSecondary: {
    fontSize: 18,
    color: "green",
  },
  textCategoria: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
