import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store/store";
import Todo from "./components/redux_toolkit";
import Redux from "./components/redux";

export default function App() {
  return (
    <Redux />

    //  <Provider store={store}>
    //     <Todo />
    //   </Provider>
  );
}
