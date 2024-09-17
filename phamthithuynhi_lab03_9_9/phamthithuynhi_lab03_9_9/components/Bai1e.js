import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Bai1e = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState(''); // Track selected gender

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.eyeIcon}>👁️</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Birthday"
        value={birthday}
        onChangeText={setBirthday}
      />

      {/* Gender Radio Buttons */}
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={styles.genderOption}
          onPress={() => setGender('Male')}>
          <View style={styles.radioButton}>
            {gender === 'Male' && <View style={styles.radioButtonSelected} />}
          </View>
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.genderOption}
          onPress={() => setGender('Female')}>
          <View style={styles.radioButton}>
            {gender === 'Female' && <View style={styles.radioButtonSelected} />}
          </View>
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2E9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#D3E8D5',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIcon: {
    marginLeft: -30,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Aligns the radio buttons to the left
    width: '100%',
    marginVertical: 10,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20, // Adds spacing between the two gender options
  },
  genderText: {
    fontSize: 16,
    marginLeft: 8,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  registerButton: {
    backgroundColor: '#D9534F',
    padding: 15,

    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  registerButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Bai1e;
