import { SET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO, SET_LOADING, SET_ERROR } from './actionTypes';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    case EDIT_TODO:
      return { 
        ...state, 
        todos: state.todos.map(todo => 
          todo.id === action.payload.id ? { ...todo, name: action.payload.newText } : todo
        ),
      };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
