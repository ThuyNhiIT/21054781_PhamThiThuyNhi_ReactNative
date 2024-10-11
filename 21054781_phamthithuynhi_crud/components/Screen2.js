import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Item = ({ name, navigation, email, id, deleteItem }) => (
  <View style={styles.item}>
    <TouchableOpacity>
      <Icon name="check" style={styles.check}></Icon>
    </TouchableOpacity>
    <Text style={styles.nameText}> {name}</Text>
    <TouchableOpacity
      onPress={() => navigation.navigate('screen4', { id, name, email })}>
      <Icon name="pencil" style={styles.pen}></Icon>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => deleteItem(id)}>
      <Icon name="trash" style={styles.trash}></Icon>
    </TouchableOpacity>
  </View>
);
const Screen2 = ({ navigation, route }) => {
  // const route = useRoute();
  const [data, setData] = useState([]);
  const { email } = route.params;
  const { job, id } = route.params;

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3081/jobs');
      const json = await response.json();

      const filteredData = json.map((item) => ({
        id: item.id.toString(),
        name: item.name,
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

  useEffect(() => {
    // Thêm mới khi `id` không tồn tại
    if (job && !id) {
      const newJob = { id: (data.length + 1).toString(), name: job };
      setData((prevData) => [...prevData, newJob]); // Thêm mục mới vào đầu danh sách
    } else if (job && id) {
      setData((prevData) => {
        return prevData.map((item) =>
          item.id === id ? { ...item, name: job } : item
        );
      });
    }
  }, [job]);
  fetchData();
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:3081/jobs/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setData((prevData) => prevData.filter((item) => item.id !== id));
      Alert.alert('Success!', 'Item deleted successfully!');
    } catch (error) {
      Alert.alert('Failed', 'Failed to delete item!');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.email}>hello, {email}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.search}>
          <Icon name="search" style={styles.iconsearch}></Icon>
          <TextInput placeholder="Search" style={styles.textSearch}></TextInput>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.flast}
        data={data}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            name={item.name}
            navigation={navigation}
            email={email}
            deleteItem={deleteItem}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <View>
        <TouchableOpacity
          style={styles.add}
          onPress={() => navigation.navigate('screen3', { email })}>
          <Icon name="plus" style={styles.iconadd}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  flast: { marginTop: 40 },
  item: {
    flexDirection: 'row',
    padding: 20,
    margin: 10,
    width: 300,
    borderRadius: 25,
    // justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#D2D5D8',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'left',
    width: 200,
  },
  check: {
    fontSize: 18,
    color: 'green',
    borderWidth: 3,
    borderColor: 'green',
    marginRight: 10,
  },
  pen: {
    color: 'red',
    fontSize: 19,
    marginRight: 30,
    marginLeft: 20,
  },
  trash: {
    fontSize: 19,
    color: 'blue',
  },
  search: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 250,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 40,
  },
  textSearch: {
    fontSize: 15,
    width: 200,
    height: 40,
  },
  iconsearch: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  add: {
    flexDirection: 'row',

    borderRadius: 50,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 40,
    backgroundColor: '#00BDD6',
  },
  iconadd: {
    color: '#fff',
    fontSize: 22,
  },
  email: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Screen2;
