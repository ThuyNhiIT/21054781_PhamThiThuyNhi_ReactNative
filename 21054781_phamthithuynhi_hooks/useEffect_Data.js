import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data"); // Chưa có data nên chưa thể test
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>{data ? data.title : "Loading..."}</Text>
    </View>
  );
};

export default MyComponent;
