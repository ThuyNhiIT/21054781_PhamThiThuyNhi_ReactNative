import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { Card } from 'react-native-paper';

import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screen1">
        <Stack.Screen name="screen1" component={Screen1} />
        <Stack.Screen name="screen2" component={Screen2} />
        <Stack.Screen name="screen3" component={Screen3} />
        <Stack.Screen name="screen4" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
