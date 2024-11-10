import { Provider} from 'react-redux';
import store from './redux/store';
import TodoList from './redux/TodoList'

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;





