import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, editTodo } from './actions';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector(state => state); // Dữ liệu từ Redux store

  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null); // Để giữ mục todo đang chỉnh sửa

  // Fetch dữ liệu khi component được mount
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({ id: Date.now().toString(), name: newTodo }));
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id, newText) => {
    dispatch(editTodo(id, newText));
    setEditingTodo(null); // Reset trạng thái chỉnh sửa sau khi lưu
    setNewTodo(''); // Xóa nội dung input sau khi chỉnh sửa xong
  };

  const handleStartEdit = (todo) => {
    setEditingTodo(todo);  // Đặt editingTodo là mục todo hiện tại mà người dùng muốn chỉnh sửa.
    setNewTodo(todo.name);  //Đưa nội dung của mục đó vào TextInput để người dùng có thể thấy và chỉnh sửa.
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.name}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => handleStartEdit(item)} style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTodo(item.id)} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>

      {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />}

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder={editingTodo ? "Edit your todo" : "Add a new todo"}
        placeholderTextColor="#ccc"
      />
      <TouchableOpacity onPress={() => editingTodo ? handleEditTodo(editingTodo.id, newTodo) : handleAddTodo()} style={styles.addButton}>
        <Text style={styles.addButtonText}>{editingTodo ? 'Save Changes' : 'Add Todo'}</Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  todoText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#F44336',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    marginTop: 20,
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default TodoList;
