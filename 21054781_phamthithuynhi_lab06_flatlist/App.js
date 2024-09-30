import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  //  <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Home">
  //       <Stack.Screen name="Chat" component={Screen1} />
  //       <Stack.Screen name="Screen2" component={Screen2} />
  //     </Stack.Navigator>
  //   </NavigationContainer>

  
  <Screen1/>
  // <Screen2/>
  );
}
