import { setTodos, addTodo, deleteTodo, editTodo, setLoading, setError } from './actions';

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch('https://6710b499a85f4164ef2ee9b0.mockapi.io/jobs');
      const data = await response.json();
      dispatch(setTodos(data));
    } catch (error) {
       dispatch(setError('Failed to fetch todos'));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const createTodo = (text) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch('https://6710b499a85f4164ef2ee9b0.mockapi.io/jobs', {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: { 'Content-Type': 'application/json' },
      });
      const newTodo = await response.json();
      dispatch(addTodo(newTodo));
    } catch (error) {
      dispatch(setError('Failed to add todo'));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const updateTodo = (id, newText) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(`https://6710b499a85f4164ef2ee9b0.mockapi.io/jobs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ text: newText }),
        headers: { 'Content-Type': 'application/json' },
      });
      const updatedTodo = await response.json();
      dispatch(editTodo(id, newText));
    } catch (error) {
      dispatch(setError('Failed to update todo'));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const deleteTodoFromAPI = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await fetch(`https://6710b499a85f4164ef2ee9b0.mockapi.io/jobs/${id}`, { method: 'DELETE' });
      dispatch(deleteTodo(id));
    } catch (error) {
      dispatch(setError('Failed to delete todo'));
    } finally {
      dispatch(setLoading(false));
    }
  };
};
