import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const ViewProduct = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ViewProduct</Text>
      <Button
        title='Mas info'
        onPress={() => navigation.navigate('ProductInfo')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default ViewProduct
