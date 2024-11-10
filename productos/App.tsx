import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Productitem from "./components/Productitem";
import { useState } from "react";

export default function App() {
  const [precioVentaCalculado, setPrecioVentaCalculado] = useState("");
  const [newId, setNewId] = useState("");
  const [newNombre, setNombre] = useState("");
  const [newCategoria, setCategoria] = useState("");
  const [newPrecioCompra, setPrecioCompra] = useState("");
  const [data, setData] = useState([
    {
      id: "1",
      nombre: "Dorito",
      categoria: "Snacks",
      precioCompra: 0.4,
      precioVenta: 0.45,
    },
    {
      id: "2",
      nombre: "Papas",
      categoria: "Snacks",
      precioCompra: 0.2,
      precioVenta: 0.25,
    },
    {
      id: "3",
      nombre: "Pastel",
      categoria: "Dulces",
      precioCompra: 1.5,
      precioVenta: 2.0,
    },
    {
      id: "4",
      nombre: "Pastel",
      categoria: "Dulces",
      precioCompra: 1.5,
      precioVenta: 2.0,
    },
  ]);
  const handleCreateProduct = () => {
    const productExists = data.find((p) => p.id === newId);
    if (productExists) {
      Alert.alert("Error", "El ID del producto ya existe", [{ text: "OK" }]);
      return;
    }
    if (!newId || !newNombre || !newCategoria || !newPrecioCompra) {
      Alert.alert("Error", "Todos los campos son obligatorios", [
        { text: "OK" },
      ]);
      return;
    }
    const newProduct = {
      id: newId,
      nombre: newNombre,
      categoria: newCategoria,
      precioCompra: parseFloat(newPrecioCompra),
      precioVenta: parseFloat(precioVentaCalculado),
    };
    setData((prev) => [newProduct, ...prev]);
  };
  const handleDeleteProduct = (id) => {
    console.log(id);

    setData((prev) => prev.filter((p) => p.id !== id));
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", paddingLeft: 24 }}>
        PRODUCTOS
      </Text>
      <View style={styles.formulario}>
        <TextInput
          style={styles.styleInput}
          placeholder="ID"
          inputMode="numeric"
          onChangeText={(id) => {
            console.log(id);
            setNewId(id);
          }}
        />
        <TextInput
          style={styles.styleInput}
          placeholder="NOMBRE"
          inputMode="text"
          onChangeText={(nombre) => setNombre(nombre)}
        />
        <TextInput
          style={styles.styleInput}
          placeholder="CATEGORIA"
          inputMode="text"
          onChangeText={(categoria) => setCategoria(categoria)}
        />
        <TextInput
          style={styles.styleInput}
          placeholder="PRECIO DE COMPRA"
          inputMode="numeric"
          onChangeText={(precioCompra) => {
            const precioVentaAgregado =
              parseFloat(precioCompra) + (parseFloat(precioCompra) * 20) / 100;
            setPrecioCompra(precioCompra);
            setPrecioVentaCalculado(precioVentaAgregado.toFixed(2));
          }}
        />
        <TextInput
          style={styles.styleInput}
          placeholder="PRECIO DE VENTA"
          inputMode="numeric"
          value={precioVentaCalculado}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 24,
            padding: 6,
            borderRadius: 5,
          }}
          onPress={handleCreateProduct}
        >
          <Text style={{ color: "white" }}>Crear</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <Text style={{ fontSize: 14, paddingLeft: 24, marginVertical: 4 }}>
          Productos: {data.length}
        </Text>
        <FlatList
          data={data}
          renderItem={(elemento) => {
            return (
              <Productitem
                elemento={elemento}
                index={elemento.item.id}
                handleDelete={handleDeleteProduct}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 64,
    width: "100%",
  },
  card: {
    backgroundColor: "#f1f1f1",
    borderRadius: 6,
    borderColor: "#9f9f9f",
    padding: 10,
    marginHorizontal: 32,
    margin: 6,
  },
  cardContainer: {
    width: "100%",
  },
  textPrimaryContainer: {
    flexDirection: "row",
  },
  textPrimary: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textSecondary: {
    fontSize: 18,
    color: "green",
  },
  formulario: {
    width: "100%",
    justifyContent: "space-around",
  },
  styleInput: {
    borderRadius: 4,
    borderColor: "#212121",
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24,
    borderWidth: 1,
  },
});
