
import store from './reduxToolkit/store';
import { Provider } from 'react-redux';
import TodoList from './reduxToolkit/TodoList'
const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);
export default App;
