import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Button,
} from "react-native";
import Productitem from "./components/Productitem";
import { useState } from "react";

export default function App() {
  const [editmode, setEditMode] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
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
  const handleEditProduct = (id) => {
    const productoFind = data.find((p) => p.id === id);
    setEditMode(true);
    setNewId(productoFind.id);
    setNombre(productoFind.nombre);
    setCategoria(productoFind.categoria);
    setPrecioCompra(productoFind.precioCompra.toString());
    setPrecioVentaCalculado(productoFind.precioVenta.toString());
  };
  const handleCreateProduct = () => {
    const productExists = data.find((p) => p.id === newId);
    if (productExists && !editmode) {
      Alert.alert("Error", "El ID del producto ya existe", [{ text: "OK" }]);
      return;
    }
    if (!newId || !newNombre || !newCategoria || !newPrecioCompra) {
      Alert.alert("Error", "Todos los campos son obligatorios", [
        { text: "OK" },
      ]);
      return;
    }
    if (editmode) {
      const productsNow = data.filter((p) => p.id != newId);

      setData(productsNow);
      limpiarForm();
      setEditMode(false);
    }
    const newProduct = {
      id: newId,
      nombre: newNombre,
      categoria: newCategoria,
      precioCompra: parseFloat(newPrecioCompra),
      precioVenta: parseFloat(precioVentaCalculado),
    };
    setData((prev) => [newProduct, ...prev]);
    limpiarForm();
  };
  const handleDeleteProduct = (id) => {
    setSelectedId(id);
    setIsModalVisible(true);
  };

  const confirmDeleteProduct = () => {
    setData((prev) => prev.filter((p) => p.id !== selectedId));
    setIsModalVisible(false);
    setSelectedId(null);
  };

  const cancelDeleteProduct = () => {
    setIsModalVisible(false);
    setSelectedId(null);
  };
  const limpiarForm = () => {
    setNewId("");
    setCategoria("");
    setNombre("");
    setPrecioCompra("");
    setPrecioVentaCalculado("");
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
          value={newId}
          onChangeText={(id) => {
            setNewId(id);
          }}
          editable={!editmode}
        />
        <TextInput
          style={styles.styleInput}
          placeholder="NOMBRE"
          inputMode="text"
          value={newNombre}
          onChangeText={(nombre) => setNombre(nombre)}
        />
        <TextInput
          style={styles.styleInput}
          placeholder="CATEGORIA"
          inputMode="text"
          value={newCategoria}
          onChangeText={(categoria) => setCategoria(categoria)}
        />
        <TextInput
          style={styles.styleInput}
          placeholder="PRECIO DE COMPRA"
          inputMode="numeric"
          value={newPrecioCompra}
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
          editable={false}
        />
        <TouchableOpacity
          style={{
            backgroundColor: editmode ? "#0af" : "green",
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 24,
            padding: 6,
            borderRadius: 5,
          }}
          onPress={handleCreateProduct}
        >
          <Text style={{ color: "white" }}>
            {editmode ? "Guardar" : "Crear"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <Text style={{ fontSize: 14, paddingLeft: 24, marginVertical: 4 }}>
          Productos: {data.length}
        </Text>
        <Modal
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>¿Está seguro que quiere eliminar?</Text>
              <View style={styles.modalButtons}>
                <Button title="Aceptar" onPress={confirmDeleteProduct} />
                <Button
                  title="Cancelar"
                  onPress={cancelDeleteProduct}
                  color="red"
                />
              </View>
            </View>
          </View>
        </Modal>
        <FlatList
          data={data}
          renderItem={(elemento) => {
            return (
              <Productitem
                elemento={elemento}
                index={elemento.item.id}
                handleDelete={handleDeleteProduct}
                handleEdit={handleEditProduct}
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 12,
  },
});
