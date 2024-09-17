import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Bai1d() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.boldText}>LOGIN</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Password" style={styles.input} />
        <TouchableOpacity style={styles.icon}>
          <Text style={styles.eyeIcon}>👁️</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      <Text style={styles.orLoginWith}>Or login with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
          <Text style={styles.socialButtonText}>f</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.zalo]}>
          <Text style={styles.socialButtonText}>Z</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.google]}>
          <LinearGradient
            colors={['#4285F4', '#34A853', '#FBBC05', '#EA4335']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradientTextContainer}>
            <Text style={styles.socialButtonText}>G</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d8efdf',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 90,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cae1d1',
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '95%',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  icon: {
    padding: 5,
  },
  loginButton: {
    backgroundColor: '#dc4e41',
    paddingVertical: 10,
    width: '95%',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  termsText: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 10,
  },
  forgotPassword: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  orLoginWith: {
    fontSize: 16,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  socialButton: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
  },
  facebook: {
    backgroundColor: '#3b5998',
  },
  zalo: {
    backgroundColor: '#0084ff',
  },
  google: {
    borderColor: 'blue',
    borderWidth: 1,
  },
  gradientTextContainer: {
    borderRadius: 8,
    paddingHorizontal: 5,
  },
  socialButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Bai1d;
