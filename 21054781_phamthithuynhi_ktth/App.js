import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import S2 from './components/S2';
import FormAdd from './components/FormAdd';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="S2">
          <Stack.Screen name="S2" component={S2} options={{ title: 'Bicycle List' }} />
          <Stack.Screen name="FormAdd" component={FormAdd} options={{ title: 'Add Bicycle' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
