import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log("Count has changed:", count);

    // Optional cleanup function
    return () => {
      console.log("Cleaning up...");
    };
  }, [count]); // Effect depends on `count`

  return (
    <View>
      <Text onPress={() => setCount(count + 1)}>Increment Count: {count}</Text>
    </View>
  );
};

export default MyComponent;
