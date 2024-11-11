import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const S3 = ({ route, navigation }) => {
  const { img, name, price, description, isLiked } = route.params; // Nhận trạng thái liked
  const [cartItems, setCartItems] = useState([]);
  const [liked, setLiked] = useState(isLiked); // Khôi phục trạng thái liked

  const addToCart = () => {
    const newItem = { img, name, price };
    setCartItems((prevItems) => [...prevItems, newItem]);
    navigation.navigate('S4', { cartItems: [...cartItems, newItem] });
    Alert.alert('Added to Cart', `${name} added to cart!`);
  };

  const toggleLike = () => {
    setLiked(!liked); // Đảo ngược trạng thái liked
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: img }} style={styles.img} />
      </View>

      <View style={styles.main}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.price}>
          <Text style={styles.textPrice}>15% OFF | ${price}</Text>
          <Text style={styles.sale}>${price}</Text>
        </View>
        <Text style={styles.description}>Description</Text>
        <Text>{description}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={toggleLike}>
          <Icon name="heart" style={[styles.heart, { color: liked ? 'red' : 'black' }]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default S3;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    flex: 1,
  },
  imgContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  img: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  main: {
    marginBottom: 15,
    marginTop: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sale: {
    textDecorationLine: 'line-through',
    color: 'red',
    fontWeight: 'bold'
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  description: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heart: {
    marginTop: 30,
    fontSize: 24,
    color: 'red',
  },
  addToCartButton: {
    backgroundColor: '#FF6F61',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: 200,
    alignItems: 'center',
    marginTop: 30,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textPrice:{
    fontWeight: 'bold',
    color: '#666'
  }
});
