import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ViewProduct from './screens/stack/ViewProduct';
import MoreInfoProduct from './screens/stack/MoreInfoProduct';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
export default function App() {
  const [login, setLogin] = useState(false)
  return (
    <NavigationContainer>
      {login ? <DrawerApp /> : <MoreInformationProductNav />}
    </NavigationContainer>
  );
}


const Stack = createStackNavigator()
const MoreInformationProductNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Product' component={ViewProduct} />
      <Stack.Screen name='ProductInfo' component={MoreInfoProduct} />
    </Stack.Navigator>
  )
}
const Drawer = createDrawerNavigator()
const DrawerApp = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Product' component={ViewProduct} />
      <Drawer.Screen name='ProductInfo' component={MoreInfoProduct} />
    </Drawer.Navigator>
  )
}
const Tab = createBottomTabNavigator()
const TabsMenu = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Product' component={ViewProduct} options={
        {
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Icon size={size} name="inbox" color={color} />
          }
        }
      } />
      <Tab.Screen name='ProductInfo' component={MoreInfoProduct} options={
        {
          tabBarIcon: ({ color, size }) => {
            return <Icon size={size} name="info" color={color} />
          }
        }
      } />
    </Tab.Navigator>
  )
}