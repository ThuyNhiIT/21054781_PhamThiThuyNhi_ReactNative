import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import useFetch from './useFetch'; // Import the custom hook

const BikeCard = ({ id, img, name, price, description, navigation, deleteItem }) => {
  const [isLiked, setIsLiked] = useState(false); // Thêm state cho liked

  const handleDelete = () => {
    Alert.alert(
      'Delete Item',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => deleteItem(id),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const toggleLike = () => {
    setIsLiked(!isLiked); // Đảo ngược trạng thái liked
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('S3', { img, name, price, description, isLiked })}
      style={styles.bikeCard}
    >
      <View>
      <TouchableOpacity onPress={toggleLike}>
          <Icon name="heart" style={[styles.heartIcon, { color: isLiked ? 'red' : 'black' }]} />
        </TouchableOpacity>
        <Image source={{ uri: img }} style={styles.bikeImage} />
        <View style={styles.action}>
          <TouchableOpacity
            style={styles.editIcon}
            onPress={() => navigation.navigate('FormEdit', { id, img, name, price, description })}
          >
            <Icon name="pencil" style={styles.textEdit} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteIcon}
            // onPress={() => deleteItem(id)}
             onPress={handleDelete} 
          >
            <Icon name="trash" style={styles.textDelete} />
          </TouchableOpacity>
        </View>
        <Text style={styles.bikeName}>{name}</Text>
        <Text style={styles.bikePrice}>${price}</Text>
        <Text style={styles.bikeDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const S2 = ({ navigation, route }) => {
    const { email } = route.params;
  const [selectedCategory, setSelectedCategory] = useState('All'); // Store selected category
  const { newItem } = route.params || {}; // Retrieve newItem passed from Add screen
  const { updatedItem, itemId } = route.params || {};

  // Use the custom hook to fetch data
  const { data, loading, error } = useFetch('https://6710b499a85f4164ef2ee9b0.mockapi.io/bicycle');

  const [filteredData, setFilteredData] = useState([]);

  // Update filtered data when new data is fetched
  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  // Update the filtered data with the updated item
  useEffect(() => {
    if (updatedItem && itemId) {
      setFilteredData((prevData) =>
        prevData.map((item) => (item.id === itemId ? updatedItem : item))
      );
    }
  }, [updatedItem, itemId]);

  // Add new item when it's passed via navigation
  useEffect(() => {
    if (newItem) {
      setFilteredData((prevData) => [...prevData, newItem]);
    }
  }, [newItem]);

  const deleteItem = async (id) => {
    try {
      const response = await fetch(`https://6710b499a85f4164ef2ee9b0.mockapi.io/bicycle/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setFilteredData((prevData) => prevData.filter((item) => item.id !== id));
      Alert.alert('Success!', 'Item deleted successfully!');
    } catch (error) {
      Alert.alert('Failed', 'Failed to delete item!');
      console.error(error);
    }
  };

  // Filter data based on selected category
  const displayedData =
    selectedCategory === 'All'
      ? filteredData
      : filteredData.filter((item) => item.categories === selectedCategory);

  // Handle loading and error states
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The World's Best Bike</Text>
       <View>
        <Text style={styles.email}>Hello, {email}</Text>
      </View>
      <TouchableOpacity
        style={styles.add}
        onPress={() => navigation.navigate('FormAdd')}
      >
        <Text style={styles.textadd}>ADD</Text>
      </TouchableOpacity>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'All' && styles.selectedCategory]}
          onPress={() => setSelectedCategory('All')}
        >
          <Text style={styles.textFilter}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Roadbike' && styles.selectedCategory]}
          onPress={() => setSelectedCategory('Roadbike')}
        >
          <Text style={styles.textFilter}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Mountain' && styles.selectedCategory]}
          onPress={() => setSelectedCategory('Mountain')}
        >
          <Text style={styles.textFilter}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={displayedData}
        keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
        numColumns={2}
        renderItem={({ item }) => (
          <BikeCard
            id={item.id} // Pass the id to BikeCard
            img={item.img}
            name={item.name}
            price={item.price}
            description={item.description}
            navigation={navigation}
            deleteItem={deleteItem} // Pass deleteItem to BikeCard
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  bikeCard: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    marginRight: 10,
    justifyContent: 'space-between',
    padding: 10,
  },
  heartIcon: {
    fontSize: 24,
    color: 'red',
    marginRight: 10,
    alignSelf: 'flex-end',
  },
 bikeImage: {
    width: 100, // Set a width for your image
    height: 100, // Set a height for your image
    resizeMode: 'cover', // Adjust based on your preference
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bikePrice: {
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 5,
  },
  bikeDescription: {
    color: '#555',
    fontSize: 14,
    marginTop: 5,
    display: 'none',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#ffd700',
    padding: 10,
    borderRadius: 8,
  },
  selectedCategory: {
    backgroundColor: '#ffa500',
  },
  textFilter: {
    fontWeight: 'bold',
  },
  add: {
    height: 40,
    width: 70,
    backgroundColor: '#00BDD6',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 230,
    marginBottom: 20,
  },
  textadd: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  action: {
    flexDirection: 'row',
  },
  editIcon: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  deleteIcon: {
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEdit: {
    textAlign: 'center',
    color: '#fff',
  },
  textDelete: {
    textAlign: 'center',
    color: '#fff',
  },
    email: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default S2;
