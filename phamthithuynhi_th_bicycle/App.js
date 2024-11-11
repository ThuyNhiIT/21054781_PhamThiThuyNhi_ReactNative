import { StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import S1 from './components/Screen01';
import S2 from './components/Screen02';
import S3 from './components/Screen03';
import S4 from './components/Screen04';
import FormAdd from './components/FormAdd';
import FormEdit from './components/FormEdit';
// or any files within the Snack
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="S1">
        <Stack.Screen name="S1" component={S1} />
        <Stack.Screen name="S2" component={S2} />
        <Stack.Screen name="S3" component={S3} />
        <Stack.Screen name="S4" component={S4} />
        <Stack.Screen name="FormAdd" component={FormAdd} />
        <Stack.Screen name="FormEdit" component={FormEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
