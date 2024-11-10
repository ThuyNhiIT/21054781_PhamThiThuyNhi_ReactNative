const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => { // gồm state: trạng thái hiện tại và action gửi đến store
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: (state.length + 1).toString(), text: action.payload }],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload), // Giữ lại các mục không có id trùng với action.payload, loại bỏ mục cần xóa.
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => // Kiểm tra từng mục trong todos và cập nhật mục có id khớp với action.payload.id, thay đổi text thành newText.
          todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo 
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
