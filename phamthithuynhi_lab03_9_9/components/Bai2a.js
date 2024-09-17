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
      colors={['#f6c701', '#f6c701', '#C8A101', '#C8A101']} // Gradient colors (from light blue to blue)
      style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput style={styles.input} placeholder="👤 Name" />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput style={styles.input} placeholder="👤 Password" />
        <TouchableOpacity>
          <Text style={styles.eyeIcon}>👁️</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <View >
        <Text style={styles.footer} >CREATE ACCOUNT</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#00CCF9',
  },

  header: {
    padding: 50,
  },
  footer: {
    padding: 50,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 30,
    backgroundColor: "#fffff",
    fontWeight: 'bold',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  button: {
    backgroundColor: '#000000',
    width: '70%',
    marginStart: -25,
    marginTop: 50,
    height: 50,
    flex: "row",
    justifyContent: "center",


  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '110%',
    paddingLeft: 60,

  },
  eyeIcon: {
    marginLeft: -30,
    marginBottom: 30,
  },
});

export default Bai1b;
