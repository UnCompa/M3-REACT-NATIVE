import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GradeForm from "./app/screens/GradeForm";
import ListGrade from "./app/screens/ListGrade";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListGradeNav" id={undefined}>
        <Stack.Screen name="GradeFormNav" component={GradeForm} />
        <Stack.Screen name="ListGradeNav" component={ListGrade} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
