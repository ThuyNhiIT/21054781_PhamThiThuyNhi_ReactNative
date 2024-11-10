import { Provider } from 'react-redux';
import TodoList from './redux/TodoList'
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
