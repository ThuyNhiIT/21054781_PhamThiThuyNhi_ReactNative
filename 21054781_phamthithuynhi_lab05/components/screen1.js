import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

import { Star } from 'lucide-react'; // Thư viện để tạo ngôi sao
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

// or any files within the Snack

export default function Screen1({ route, navigation }) {
  const [color, setColor] = useState('blue');

  useEffect(() => {
    if (route.params?.color) {
      setColor(route.params.color);
    }
  }, [route.params?.color]);
  const phoneImages = {
    blue: require('../img/vs_blue.png'),
    sliver: require('../img/vs_silver.png'),
    black: require('../img/vs_black.png'),
    red: require('../img/vs_red.png'),
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={phoneImages[color]} style={styles.image} />
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>Điện thoại Iphone14 - Hàng chính hãng</Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Icon key={i} name="star" size={16} color="#FFD700" />
          ))}

          <Text style={styles.ratingText}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.main1}>
          <Text style={styles.price}>1.790.000 đ </Text>
          <Text style={styles.priceSale}>1.790.000 đ</Text>
        </View>
        <View style={styles.main2}>
          <Text style={styles.price}> Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
          <Text> </Text>
          <TouchableOpacity
            style={styles.select}
            onPress={() => navigation.navigate('Screen2')}>
            <Text>4 màu - Chọn màu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buy}>
            <Text style={styles.textBuy}>Chọn mua</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 370,
  },
  title: {
    fontWeight: 'bold',
  },

  main: {
    padding: 15,
  },
  main1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  main2: {
    padding: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    marginLeft: 28,
  },
  price: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceSale: {
    color: '#808080',
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  select: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 30,
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
  },
  buy: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 30,
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#EE0A0A',
    padding: 15,
  },
  textBuy: {
    fontWeight: 'bold',
  },
});

// export default Screen1;
