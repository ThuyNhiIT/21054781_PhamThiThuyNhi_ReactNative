import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const store = configureStore({ 
  reducer: { // reducer là một thuộc tính chính để khai báo các reducers mà store sẽ sử dụng.
    todos: todoReducer, //todoReducer là hàm reducer chịu trách nhiệm xử lý các hành động và cập nhật state của todos
  },
});

export default store;
