import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useReducer, useState } from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { Card } from "react-native-paper";

const data = [
  { name: "To check email", id: "1" },
  { name: "UI task web page", id: "2" },
  { name: "Learn javascript basic", id: "3" },
  { name: "Learn HTML advance", id: "4" },
  { name: "Medical app UI", id: "5" },
  { name: "Learn java", id: "6" },
];

const Item = ({ name, onDelete, id, onEdit }) => (
  <View style={styles.item}>
    <TouchableOpacity>
      <Icon name="check" style={styles.check} />
    </TouchableOpacity>
    <Text style={styles.nameText}>{name}</Text>
    <TouchableOpacity onPress={() => onEdit(id)}>
      <Icon name="pencil" style={styles.pen} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onDelete(id)}>
      <Icon name="trash" style={styles.trash} />
    </TouchableOpacity>
  </View>
);

var reducer = (state = data, action) => {
  switch (action.type) {
    case "ADD_JOB":
      return [
        ...state,
        { name: action.payload.name, id: (state.length + 1).toString() },
      ];
    case "DELETE_JOB":
      return state.filter((item) => item.id !== action.payload);
    case "EDIT_JOB":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.name }
          : item
      );
    default:
      return state;
  }
};

var store = createStore(reducer, data);

var Todo = function Todo() {
  const [job, setJob] = useState("");
  const [editingId, setEditingId] = useState(null);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleJob = (input) => {
    setJob(input);
  };

  const addJob = () => {
    if (job.trim()) {
      dispatch({ type: "ADD_JOB", payload: { name: job } });
      setJob("");
    }
  };

  const deleteJob = (id) => {
    dispatch({ type: "DELETE_JOB", payload: id });
  };

  const editJob = (id) => {
    const itemToEdit = state.find((item) => item.id === id);
    setJob(itemToEdit.name); // Đặt tên job vào input để sửa
    setEditingId(id); // Lưu ID của job đang chỉnh sửa
  };

  const saveEditJob = () => {
    if (job.trim() && editingId) {
      dispatch({ type: "EDIT_JOB", payload: { id: editingId, name: job } });
      setJob(""); // Reset input
      setEditingId(null); // Reset ID
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.search}>
          <Icon name="search" style={styles.iconsearch} />
          <TextInput placeholder="Search" style={styles.textSearch} />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.flast}
        data={state}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            id={item.id}
            onDelete={deleteJob}
            onEdit={editJob}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập job"
        value={job}
        onChangeText={handleJob}
      />
      <View>
        {editingId ? (
          <TouchableOpacity style={styles.add} onPress={saveEditJob}>
            <Text style={styles.iconadd}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.add} onPress={addJob}>
            <Icon name="plus" style={styles.iconadd} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  flast: { marginTop: 40 },
  item: {
    flexDirection: "row",
    padding: 20,
    margin: 10,
    width: 300,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    backgroundColor: "#D2D5D8",
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "left",
    width: 200,
  },
  check: {
    fontSize: 18,
    color: "green",
    borderWidth: 3,
    borderColor: "green",
    marginRight: 10,
  },
  pen: {
    color: "red",
    fontSize: 19,
    marginRight: 30,
    marginLeft: 20,
  },
  trash: {
    fontSize: 19,
    color: "blue",
  },
  search: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 250,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 40,
  },
  textSearch: {
    fontSize: 15,
    width: 200,
    height: 40,
  },
  iconsearch: {
    fontSize: 18,
    fontWeight: "bold",
  },
  add: {
    flexDirection: "row",
    borderRadius: 50,
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 40,
    backgroundColor: "#00BDD6",
  },
  iconadd: {
    color: "#fff",
    fontSize: 22,
  },
  input: {
    width: "85%",
    borderWidth: 1,
    height: 40,
    borderRadius: 50,
  },
});
