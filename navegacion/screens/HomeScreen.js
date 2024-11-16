import { View, Text, StyleSheet, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <View style={styles.containerButtons}>
      <Button
        title="Ir a contactos"
        onPress={() => navigation.navigate("Contacts")}
      />
      <Button
        title="Ir a productos"
        onPress={() => navigation.navigate("Products")}
      />
      </View>
    </View>
  )
}

export default HomeScreen

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
