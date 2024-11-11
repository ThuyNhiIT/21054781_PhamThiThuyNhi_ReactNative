import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  fetchBicycles,
  setCategory,
  filterBicycles,
} from "../redux/bicycleSlice";
import Icon from "react-native-vector-icons/FontAwesome";

const S2 = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const filteredData = useSelector((state) => state.bicycles.filteredData);
  const status = useSelector((state) => state.bicycles.status);
  const selectedCategory = useSelector(
    (state) => state.bicycles.selectedCategory
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBicycles());
    }
  }, [status, dispatch]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <View style={styles.action}>
        <TouchableOpacity style={styles.editIcon}>
          <Icon name="pencil" style={styles.textEdit} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteIcon}>
          <Icon name="trash" style={styles.textDelete} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleFilterChange = (category) => {
    dispatch(setCategory(category));
    dispatch(filterBicycles());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The World's Best Bike</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("FormAdd")}
      >
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>

      <View style={styles.filterButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === "All" && styles.activeFilter,
          ]}
          onPress={() => handleFilterChange("All")}
        >
          <Text style={styles.filterButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === "Roadbike" && styles.activeFilter,
          ]}
          onPress={() => handleFilterChange("Roadbike")}
        >
          <Text style={styles.filterButtonText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === "Mountain" && styles.activeFilter,
          ]}
          onPress={() => handleFilterChange("Mountain")}
        >
          <Text style={styles.filterButtonText}>Mountain</Text>
        </TouchableOpacity>
      </View>

      {status === "loading" ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: "#00C8E8",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  filterButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  filterButton: {
    backgroundColor: "#FFD700",
    padding: 8,
    borderRadius: 5,
  },
  activeFilter: {
    backgroundColor: "#FFA500",
  },
  filterButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    margin: 5,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#FF4500",
  },
  action: {
    flexDirection: "row",
  },
  editIcon: {
    backgroundColor: "red",
    borderRadius: 10,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  deleteIcon: {
    backgroundColor: "blue",
    borderRadius: 10,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textEdit: {
    textAlign: "center",
    color: "#fff",
  },
  textDelete: {
    textAlign: "center",
    color: "#fff",
  },
});

export default S2;
