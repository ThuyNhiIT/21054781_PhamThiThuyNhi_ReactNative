import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


const Bai1a = () => {
  return (
    <LinearGradient
     colors={['#cbf3f6','#cbf3f6','#def4f5','#ffffff', '#00CCF9']} // Gradient colors (from light blue to blue)
  style={styles.container}
    >
      {/* Circle */}
      <View style={styles.circle} />

      {/* Title */}
      <Text style={styles.title}>GROW</Text>
      <Text style={styles.title}>YOUR BUSINESS</Text>

      {/* Description */}
      <Text style={styles.description}>
        We will help you to grow your business using online server
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <view style={styles.text}>
      HOW WE WORK?
      </view>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    marginTop: 50,
    marginBottom: 50,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: 'black',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  description: {
    marginTop: 30,
    marginBottom: 50,
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
 
  },
  button: {
    backgroundColor: '#E3C000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text:{
    margin:10,
    
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


export default Bai1a;
