import React from 'react';
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';

const YourApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image} >
      <Image source={
        {uri:"https://static-00.iconduck.com/assets.00/circle-ellipse-shape-icon-512x510-tllm8ic9.png"}} 
      style={{height:200, width:200}}></Image>
      </View>
      <Text style={styles.boldText}>GROW</Text>
      <Text style={styles.boldText}>YOUR BUSINESS</Text>
      <Text style={styles.regularText}>
        We will help you to grow your business using online server
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignUp}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiều dọc
    backgroundColor: '#33CCFF', // Màu nền
    justifyContent: 'center',  
    alignItems: 'center',  
  },
  image:{
    paddingVertical: 60,
    paddingTop: 30,
    width: 140,
    justifyContent: 'center',  
    alignItems: 'center',  
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  regularText: {
    fontSize: 18, 
    textAlign: 'center',
    marginTop: 10, 
    marginHorizontal: 20, 
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 80,
  },
  buttonLogin: {
    backgroundColor: '#FFFF33',
    paddingVertical: 10,//Khoang cach deu tren duoi 
    paddingHorizontal: 20,//Khoang cach deu trai phai
    borderRadius: 5,
    marginRight: 10,
    borderColor: 'black',
    borderWidth: 2,
    
  },
  buttonSignUp:{
    backgroundColor: '#FFFF33',
    paddingVertical: 10,//Khoang cach deu tren duoi 
    paddingHorizontal: 20,//Khoang cach deu trai phai
    borderRadius: 5, // Bo viền 5px
    marginLeft: 40,
    borderColor: 'black', // Cho viền màu đen
    borderWidth: 2,
  },
  buttonText:{
    fontWeight: 'bold',
  },

});

export default YourApp;