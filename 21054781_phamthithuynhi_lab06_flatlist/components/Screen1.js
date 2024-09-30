import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { Icon } from 'react-native-elements';

// or any files within the Snack

const data = [
  {
    id: 1,
    img: require('../img/ca_nau_lau.png'),
    name: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
  },
  {
    id: 2,
    img: require('../img/ga_bo_toi.png'),
    name: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Shop LTD Food',
  },
  {
    id: 3,
    img: require('../img/xa_can_cau.png'),
    name: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
  },
  {
    id: 4,
    img: require('../img/do_choi_dang_mo_hinh.png'),
    name: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
  },
  {
    id: 5,
    img: require('../img/lanh_dao_gian_don.png'),
    name: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
  },
  {
    id: 6,
    img: require('../img/hieu_long_con_tre.png'),
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
  },
  {
    id: 7,
    img: require('../img/hieu_long_con_tre.png'),
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
  },
  {
    id: 8,
    img: require('../img/do_choi_dang_mo_hinh.png'),
    name: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
  },
  {
    id: 9,
    img: require('../img/lanh_dao_gian_don.png'),
    name: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
  },
];

const Item = ({ name, img, shop }) => (
  <View style={styles.item}>
    <Image source={img} style={styles.imagePlaceholder} />
    <View style={styles.details}>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.shopName}>{shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);
export default function Screen1(navigation) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="arrow-back" type="material" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.textheader}> Chat </Text>

        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="shopping-cart" type="material" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.textnav}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item name={item.name} img={item.img} shop={item.shop} />
        )}
        keyExtractor={(item) => item.id}
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
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  textheader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    height: 120,
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopName: {
    fontSize: 14,
    color: '#666',
  },
  chatButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
  textnav: {
    fontSize: 16,
    backgroundColor: '#F5F5F5',
    height: 100,
  },
});
