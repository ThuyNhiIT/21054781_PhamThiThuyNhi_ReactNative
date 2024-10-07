import React from "react";
import { View, Text } from "react-native";

function MyComponent({ numbers }) {
  // This function will run every time the component renders
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return (
    <View>
      <Text>Sum: {sum}</Text>
    </View>
  );
}

export default function TestUseMemo() {
  const numbers = [1, 2, 3, 4, 5];

  return <MyComponent numbers={numbers} />;
}
