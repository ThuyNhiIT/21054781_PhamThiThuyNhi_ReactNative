import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [], // danh sách ban đầu rỗng
  reducers: { // đối tượng chứa hàm reducer bao gồm các action xử lý và cập nhật
    addTodo: (state, action) => { 
      state.push({ id: (state.length + 1).toString(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload); // Giữ lại các mục không có id trùng với action.payload, loại bỏ mục cần xóa.
    },
    editTodo: (state, action) => { // Kiểm tra từng mục trong todos và cập nhật mục có id khớp với action.payload.id, thay đổi text thành newText.
      const { id, newText } = action.payload;
      const todo = state.find(todo => todo.id === id); 
      if (todo) {
        todo.text = newText;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions 
export default todoSlice.reducer; // Xuất reducer của slice để sử dụng trong store Redux => `todoReducer` 
