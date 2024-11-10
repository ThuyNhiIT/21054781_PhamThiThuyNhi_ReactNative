import {
  Text,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';


const Item = ({ name, email }) => (
  <View style={styles.item}>
    <Text style={styles.nameText}>Name: {name}</Text>
    <Text style={styles.emailText}>Email: {email}</Text>
  </View>
);
export default function App() {
  const [data, setData] = useState([]);
   const [lastId, setLastId] = useState(0);
  // Gọi API khi ứng dụng được mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments'
      );
      const json = await response.json();

        const filteredData = json.slice(0, 3).map((item) => ({
        id: item.id.toString(), // Đảm bảo ID là chuỗi
        name: item.name,
        email: item.email,
      }));

      setData(filteredData);
      // Kiểm tra xem có dữ liệu không
      if (filteredData.length > 0) {
       
        const lastItem = filteredData[filteredData.length - 1];
        setLastId(parseInt(lastItem.id)); 
      } else {
        setLastId(0); 
      }
      Alert.alert('Thành công !', 'Lấy dữ liệu thành công !');
    } catch (error) {
      Alert.alert('Thất bại', 'Lấy dữ liệu thất bại !');
      console.error(error);
    }
  };

  const addRandomItem = async () => {
    const newId = lastId + 1; // Tăng ID lên 1
    const randomName = `User ${newId}`;
    const randomEmail = `user${newId}@example.com`;

    const newItem = {
      id: newId.toString(), // Chuyển ID thành chuỗi
      name: randomName,
      email: randomEmail,
    };

    // Gửi POST request
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Cập nhật danh sách item mới
      setData((prevData) => [...prevData, newItem]); // Thêm item mới vào danh sách
      setLastId(newId); // Cập nhật lastId mới

      Alert.alert('Thành công!', 'Thêm item mới thành công!');
    } catch (error) {
      Alert.alert('Thất bại', 'Thêm item thất bại!');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.action}>
        <TouchableOpacity style={styles.button} onPress={addRandomItem}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
      {/* Hiển thị danh sách item */}
      <FlatList
        data={data}
        renderItem={({ item }) => <Item name={item.name} email={item.email} />}
        keyExtractor={(item) => item.id} // Sử dụng id chuỗi làm key
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  action: {},
  button: {
    backgroundColor: '#26c3d9',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  emailText: {
    fontSize: 16,
    color: '#555',
  },
});
