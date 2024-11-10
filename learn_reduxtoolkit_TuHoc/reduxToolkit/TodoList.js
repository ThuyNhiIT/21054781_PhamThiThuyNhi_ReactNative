import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './todoSlice';

export default TodoList = () => {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddOrEdit = () => {
    if (input.trim() === '') return;

    if (editId !== null) {
      dispatch(editTodo({ id: editId, newText: input }));
      setEditId(null);
    } else {
      dispatch(addTodo(input));
    }

    setInput('');
  };
    const handleEdit = (id, text) => {
    setEditId(id);
    setInput(text);
  };

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
