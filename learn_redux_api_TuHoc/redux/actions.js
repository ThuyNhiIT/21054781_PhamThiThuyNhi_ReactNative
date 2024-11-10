import { SET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO, SET_LOADING, SET_ERROR } from './actionTypes';

// Fetch todos từ API
export const fetchTodos = () => async (dispatch) => {
  dispatch(setLoading(true)); // Set loading to true while fetching data
  try {
    const response = await fetch('https://6710b499a85f4164ef2ee9b0.mockapi.io/jobs');  // Thay bằng URL API của bạn
    const data = await response.json();
    dispatch(setTodos(data)); // Dispatch action SET_TODOS khi lấy được dữ liệu
    dispatch(setLoading(false)); // Set loading to false after fetching data
  } catch (error) {
    dispatch(setError('Failed to fetch todos')); // Nếu có lỗi xảy ra
    dispatch(setLoading(false)); // Set loading to false nếu có lỗi
  }
};

// Set todos vào store
export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos
});

// Thêm một todo
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

// Xóa một todo
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

// Chỉnh sửa một todo
export const editTodo = (id, newText) => ({
  type: EDIT_TODO,
  payload: { id, newText }
});

// Set loading state
export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
});

// Set error state
export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});
