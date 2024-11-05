import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { addJob, deleteJob, editJob } from "../store/todoSlice";

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

const Todo = () => {
  const [job, setJob] = useState("");
  const [editingId, setEditingId] = useState(null);
  const state = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleJob = (input) => setJob(input);

  const addNewJob = () => {
    if (job.trim()) {
      dispatch(addJob({ name: job }));
      setJob("");
    }
  };

  const deleteSelectedJob = (id) => dispatch(deleteJob(id));

  const editSelectedJob = (id) => {
    const itemToEdit = state.find((item) => item.id === id);
    setJob(itemToEdit.name);
    setEditingId(id);
  };

  const saveEditedJob = () => {
    if (job.trim() && editingId) {
      dispatch(editJob({ id: editingId, name: job }));
      setJob("");
      setEditingId(null);
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
        data={state}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            id={item.id}
            onDelete={deleteSelectedJob}
            onEdit={editSelectedJob}
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
      <TouchableOpacity
        style={styles.add}
        onPress={editingId ? saveEditedJob : addNewJob}
      >
        <Text style={styles.iconadd}>{editingId ? "Save" : "+"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
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
export default Todo;
