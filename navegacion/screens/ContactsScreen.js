import { View, Text, StyleSheet, Button } from 'react-native'

const ContactScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ContactScreen</Text>
      <View style={styles.containerButtons}>
      <Button
        title="Ir al Home"
        onPress={() => navigation.navigate("Home")}
      />
      </View>
    </View>
  )
}

export default ContactScreen

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

