import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { addTodo, deleteTodo, editTodo } from './actions';
import {useSelector, useDispatch } from 'react-redux';

export default  TodoList = () => {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const todos = useSelector(state => state.todos); // // Lấy danh sách todos từ store
  const dispatch = useDispatch(); // // Lấy hàm dispatch để gửi action

  const handleAddOrEdit = () => {
    if (input.trim() === '') return; // Nếu rỗng, hàm sẽ dừng và không thực hiện 

    if (editId !== null) { //  Kiểm tra xem editId có khác null không. Nếu khác null, nghĩa là đang ở chế độ chỉnh sửa.
      dispatch(editTodo(editId, input));  // Gửi một hành động editTodo với editId và nội dung input để chỉnh sửa mục hiện có.
      setEditId(null); // Đặt lại editId thành null để thoát chế độ chỉnh sửa.
    } else {
      dispatch(addTodo(input));  // nếu là editID null thì là add, gọi phương thức add
    }

    setInput(''); //  Đặt lại input thành chuỗi rỗng sau khi hoàn tất thêm hoặc chỉnh sửa.
  };

  // Cái này thì có id và lấy text được nhập mới
  const handleEdit = (id, text) => {
    setEditId(id);
    setInput(text);
  };


  // gọi hàm xóa để xóa id được chọn
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập công việc..."
        value={input}
        onChangeText={setInput}
      />
      <Button title={editId ? "Cập nhật" : "Thêm"} onPress={handleAddOrEdit} />

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => handleEdit(item.id, item.text)} style={styles.editButton}>
                <Text style={styles.buttonText}>Sửa</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                <Text style={styles.buttonText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  todoText: {
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 10,
    backgroundColor: '#4caf50',
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
