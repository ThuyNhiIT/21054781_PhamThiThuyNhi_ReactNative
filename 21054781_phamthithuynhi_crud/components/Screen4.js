import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen3 = ({ navigation, route }) => {

const { email, id, name } = route.params;

const [job, setJob] = useState(name); // Sử dụng `name` như là giá trị mặc định

const handleJob = (input) => {
  setJob(input);
};

const updateItem = async () => {
  const updatedItem = { id: id, name: job }; // Sử dụng `id` và `job` từ state và params

  try {
    const response = await fetch(`http://localhost:3081/jobs/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });

    if (!response.ok) throw new Error('Network response was not ok');

    Alert.alert('Success', 'Item updated successfully!');
    setJob(''); // Xóa input sau khi cập nhật thành công
    navigation.navigate('Screen02', {
      updatedJob: job,
      jobId: id, // Truyền `id` trở lại dưới dạng `jobId`
    });
  } catch (error) {
    Alert.alert('Error', 'Failed to update item');
    console.error(error);
  }
};


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.email}>hello, {email}</Text>
      </View>

      <View>
        <Text style={styles.title}>EDIT YOUR JOB</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.input}>
          <Icon name="book" />
          <TextInput
            placeholder="input your job"
            style={styles.textInput}
            value={job}
            onChangeText={handleJob}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.finish}
          onPress={() => {
            updateItem(); // Gọi hàm update
            navigation.navigate('screen2', { job , email}); // Chuyển đến màn hình 2
          }}>
          <Text style={styles.textFinish}>Finish</Text>
          <Icon name="arrow-right" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://png.pngtree.com/png-clipart/20190118/ourlarge/pngtree-notebook-book-signing-pen-hand-drawn-cartoon-png-image_457203.jpg',
          }}
          style={styles.img}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 80,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  textInput: {
    marginLeft: 20,
    width: 230,
    fontWeight: '500',
    height: 50,
  },
  finish: {
    backgroundColor: '#00BDD6',
    borderRadius: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    flexDirection: 'row',
  },
  textFinish: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 20,
  },
  icon: {
    color: '#fff',
  },
  img: {
    height: 250,
    width: 250,
    marginTop: 50,
  },
  email: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Screen3;
