import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { Icon } from 'react-native-elements';

// or any files within the Snack

const data = [
  {
    id: 1,
    img: require('../img/giacchuyen1.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    rating: 4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
  },
  {
    id: 2,
    img: require('../img/daynguon1.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    rating: 4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
  },
  {
    id: 3,
    img: require('../img/dauchuyendoipsps21.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    rating: 4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
  },
  {
    id: 4,
    img: require('../img/dauchuyendoi1.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    rating: 4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
  },
  {
    id: 5,
    img: require('../img/carbusbtops21.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    rating: 4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
  },
  {
    id: 6,
    img: require('../img/daucam1.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    rating: 4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
  },
  {
    id: 7,
    img: require('../img/dauchuyendoi1.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    rating: 4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
  },
  {
    id: 8,
    img: require('../img/carbusbtops21.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    rating: 4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
  },
];

const Item = ({ name, price, discount, rating, reviews, img }) => (
  <View style={styles.productContainer}>
    <Image source={img} style={styles.productImage} />
    <Text style={styles.productName}>{name}</Text>

    <View style={styles.ratingContainer}>
      <Text style={styles.productRating}>⭐⭐⭐⭐ {rating}</Text>
      <Text style={styles.productReviews}>({reviews})</Text>
    </View>
    <View style={styles.priceContainer}>
      <Text style={styles.productPrice}>{price}</Text>
      <Text style={styles.productDiscount}>{discount}</Text>
    </View>
  </View>
);

export default function Screen2( navigation) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="arrow-back" type="material" size={24} color="#fff" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Dây cáp usb"
          placeholderTextColor="#000"
        />
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="shopping-cart" type="material" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Item {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="menu" type="material" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="home" type="material" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="arrow-back" type="material" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    textAlign: 'center',
    width: 200,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  productDiscount: {
    fontSize: 12,
    color: '#ccc',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productRating: {
    fontSize: 12,
    color: '#ffcc00',
  },
  productReviews: {
    fontSize: 12,
    color: '#888',
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 49,
    backgroundColor: '#00AEEF',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 49,
    backgroundColor: '#00AEEF',
    color: '#fff',
  },
  textheader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  searchInput:{
    height: 35,
    backgroundColor: "#fff",
    width: 130,
    borderRadius: 10,
    margin: 10
  }
});
