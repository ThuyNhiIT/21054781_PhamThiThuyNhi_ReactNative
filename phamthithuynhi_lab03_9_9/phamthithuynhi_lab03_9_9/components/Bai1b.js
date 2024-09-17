import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
const Bai1b = () => {
  return (
    <LinearGradient
      colors={['#cbf3f6', '#cbf3f6', '#def4f5', '#ffffff', '#00CCF9']} // Gradient colors (from light blue to blue)
      style={styles.container}>
      <Icon name="lock" size={160} style={styles.icon} />

      <Text style={styles.title}>
        FORGET
        <br />
        PASSWORD
      </Text>
      <Text style={styles.description}>
        Provide your account's email for which you want to reset your password
      </Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00CCF9',
  },
  icon: {
    color: 'black',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 30,
    backgroundColor: '#C4C4C4',
  },
  button: {
    backgroundColor: '#E3C000',
    width: '80%',
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Bai1b;
