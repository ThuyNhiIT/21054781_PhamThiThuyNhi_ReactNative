import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const OrderScreen = () => {
  // UseState
  const [quantity, setQuantity] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [total, setTotal] = useState(141800);

  // Function
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotal(total - 141800);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    setTotal(total + 141800);
  };

  const handleApplyCoupon = () => {
    if (coupon === "TIKI") {
      setTotal(total - 20000);
    }
  };

  const datHang = () => {
    alert("Đặt hàng thành công");
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image
          source={require("../img/NguyenHamTichPhan.jpg")}
          style={styles.image}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>
            Nguyên hàm, tích phân và ứng dụng
          </Text>
          <Text style={styles.supplier}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>141.800 đ</Text>
          <Text style={styles.priceSale}>141.800 đ</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.buttonSoLuong}
              onPress={handleDecrease}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.buttonSoLuong}
              onPress={handleIncrease}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMuaSau} onPress={() => {}}>
              <Text style={styles.buttonText}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.quantityContainer1}>
        <TouchableOpacity onPress={() => {}}>
          <Text>Mã giảm giá đã lưu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.buttonText}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.couponContainer}>
        <TextInput
          style={styles.couponInput}
          value={coupon}
          onChangeText={setCoupon}
        />
        <Button title="Áp dụng" onPress={handleApplyCoupon} />
      </View>

      <View style={styles.giftCardContainer}>
        <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Tạm tính</Text>
        <Text style={styles.summaryPrice}>{total} đ</Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Thành tiền</Text>
        <Text style={styles.totalPrice}>{total} đ</Text>
      </View>

      <Button title="TIẾN HÀNH ĐẶT HÀNG" onPress={datHang} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 50,
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 150,
  },
  productDetails: {
    marginLeft: 10,
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  supplier: {
    color: "gray",
  },
  price: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
  priceSale: {
    color: "#808080",
    fontSize: 12,
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  quantityContainer1: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonSoLuong: {
    backgroundColor: "#C4C4C4",
    width: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    marginHorizontal: 10,
  },
  couponContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  couponInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    marginRight: 10,
    padding: 5,
  },
  giftCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  linkText: {
    color: "blue",
    marginLeft: 5,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
  },
  summaryPrice: {
    fontSize: 16,
    color: "red",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
  buttonMuaSau: {
    paddingLeft: 90,
  },
});

export default OrderScreen;
