import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const initialData = [
  {
    id: 1,
    name: 'Nhi',
    email: 'phamnhi@',
  },
  {
    id: 2,
    name: 'Nhi',
    email: 'phamnhi@',
  },
  {
    id: 3,
    name: 'Nhi',
    email: 'phamnhi@',
  },
];

const Item = ({ name, email }) => (
  <View style={styles.item}>
    <Text style={styles.nameText}>{name}</Text>
    <Text style={styles.emailText}>{email}</Text>
  </View>
);

export default function App() {
  const [data, setData] = useState(initialData); // Sử dụng state để quản lý dữ liệu
  const [nextId, setNextId] = useState(4); // Quản lý ID tiếp theo cho phần tử mới

  const handleAdd = () => {
    // Thêm phần tử mới vào danh sách
    const newItem = {
      id: nextId,
      name: `New User ${nextId}`,
      email: `newuser${nextId}@example.com`,
    };
    setData([...data, newItem]); // Cập nhật danh sách với phần tử mới
    setNextId(nextId + 1); // Tăng ID cho lần thêm tiếp theo
  };

  return (
    <View style={styles.container}>
      <View style={styles.action}>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item name={item.name} email={item.email} />
          )}
          keyExtractor={(item) => item.id.toString()} // Chuyển ID thành chuỗi
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  emailText: {
    fontSize: 16,
    color: '#555',
  },
});
