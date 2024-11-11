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

const Add = ({ navigation }) => {
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState('Roadbike');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const addItem = async () => {
    const newItem = { img, name, price, description, categories };

    try {
      const response = await fetch(
        'https://6710b499a85f4164ef2ee9b0.mockapi.io/bicycle',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newItem),
        }
      );

      if (!response.ok) throw new Error('Network response was not ok');

      const addedItem = await response.json(); // Wait for the response data

      Alert.alert('Success', 'New item added successfully!');

      // Clear input fields
      setName('');
      setDescription('');
      setPrice('');
      setCategories('Roadbike'); // Reset to default value
      setImg('');

      // Navigate to 'S2' page, pass the added item
      navigation.navigate('S2', { newItem: addedItem });

    } catch (error) {
      Alert.alert('Error', 'Failed to add item');
      console.error(error);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectCategory = (category) => {
    setCategories(category);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD YOUR ITEM</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Image URL"
          style={styles.textInput}
          value={img}
          onChangeText={setImg}
        />
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Price"
          style={styles.textInput}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Description"
          style={styles.textInput}
          value={description}
          onChangeText={setDescription}
        />

        {/* Custom Dropdown */}
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdown}>
          <Text style={styles.dropdownText}>{categories}</Text>
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
        onPress={addItem} // Call addItem function directly
      >
        <Text style={styles.textFinish}>Finish</Text>
        <Icon name="arrow-right" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Add;

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
