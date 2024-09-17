import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Bai1c() {
  return (
    <LinearGradient
      colors={['#d1f4f6', '#d1f4f6', '#d1f4f6', '#1bd1f8']}
      style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.boldText}>CODE</Text>
        <Text style={styles.subHeading}>VERIFICATION</Text>
        <Text style={styles.regular}>
          Enter ontime password sent on ++849092605798
        </Text>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    width: '80%',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  regular: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'none',
    textAlign: 'center',
    marginHorizontal: 0,
  },
  button: {
    backgroundColor: '#FFC107',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    maxWidth: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Bai1c;
