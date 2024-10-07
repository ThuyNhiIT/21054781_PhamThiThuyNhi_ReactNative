import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

// Example function to compute initial value (expensive calculation)
const calculateInitialValue = () => {
  console.log("Calculating initial value...");
  return Math.floor(Math.random() * 100); // Simulates a heavy calculation
};

const CounterApp = () => {
  // Use a callback function to set the initial value for `count`
  const [count, setCount] = useState(() => calculateInitialValue());

  return (
    <View style={{ padding: 20 }}>
      <Text>Initial Random Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(() => calculateInitialValue())} />
    </View>
  );
};

export default CounterApp;
