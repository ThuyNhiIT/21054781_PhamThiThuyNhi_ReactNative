import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const categoriesList = ['Roadbike', 'Mountain'];

const Edit = ({ navigation, route }) => {
  const { id, img, name, price, description, categories } = route.params;

  const [item, setItem] = useState({
    img: img,
    name: name,
    price: price.toString(),
    description: description,
    categories: categories,
  });

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleChange = (field, value) => {
    setItem((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectCategory = (category) => {
    handleChange('categories', category);
    setDropdownVisible(false);
  };

  const updateItem = async () => {
    const updatedItem = {
      id: id,
      img: item.img,
      name: item.name,
      price: parseFloat(item.price),
      description: item.description,
      categories: item.categories,
    };

    try {
      const response = await fetch(`https://6710b499a85f4164ef2ee9b0.mockapi.io/bicycle/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      Alert.alert('Success', 'Item updated successfully!');
      navigation.navigate('S2', {
        updatedItem: updatedItem,
        itemId: id,
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to update item: ' + error.message);
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Your Item</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Image URL"
          style={styles.textInput}
          value={item.img}
          onChangeText={(value) => handleChange('img', value)}
        />
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          value={item.name}
          onChangeText={(value) => handleChange('name', value)}
        />
        <TextInput
          placeholder="Price"
          style={styles.textInput}
          value={item.price}
          onChangeText={(value) => handleChange('price', value)}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Description"
          style={styles.textInput}
          value={item.description}
          onChangeText={(value) => handleChange('description', value)}
        />
        
        {/* Custom Dropdown */}
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdown}>
          <Text style={styles.dropdownText}>{item.categories}</Text>
          <Icon name={dropdownVisible ? 'caret-up' : 'caret-down'} size={14} />
        </TouchableOpacity>

        {dropdownVisible && (
          <View style={styles.dropdownList}>
            {categoriesList.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => selectCategory(category)}
                style={styles.dropdownItem}
              >
                <Text>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      
      <TouchableOpacity
        style={styles.finish}
        onPress={updateItem}
      >
        <Text style={styles.textFinish}>Finish</Text>
        <Icon name="arrow-right" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
    maxHeight: 150,
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 10,
  },
  finish: {
    backgroundColor: '#00BDD6',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFinish: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
  },
});
