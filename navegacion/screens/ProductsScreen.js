import { View, Text, StyleSheet, Button } from 'react-native'
const ProductScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ProductScreen</Text>
      <View style={styles.containerButtons}>
      <Button
        title="Ir al Home"
        onPress={() => navigation.navigate("Home")}
      />
      </View>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButtons: {
    flexDirection: "row",
    gap: 10,
  }
});

