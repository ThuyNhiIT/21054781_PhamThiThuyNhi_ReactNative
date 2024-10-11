import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen1 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const handleEmail = (input) => {
    setEmail(input);
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: 'https://hoasaphanoi.vn/wp-content/uploads/2022/09/40-bong-hoa-sap-nhu.jpg',
          }}
          style={styles.img}></Image>
      </View>
      <View>
        <Text style={styles.title}>MANAGE YOUR TASK</Text>
      </View>
      <View style={styles.email}>
        <Icon name="envelope"></Icon>
        <TextInput
          placeholder="Enter your Email"
          style={styles.textEmail}
          onChangeText={handleEmail}
          value={email}></TextInput>
      </View>
      <View>
      
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('screen2', { email })}>
          <Text style={styles.textbutton}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    padding: 20,
  },
  img: {
    height: 200,
    width: 200,
    marginTop: 40,
  },
  title: {
    color: '#8353E2',
    fontWeight: 'bold',
    fontSize: 25,
    width: 250,
    textAlign: 'center',
    marginTop: 50,
  },
  email: {
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    width: 250,
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 70,
    borderRadius: 10,
    height: 40,
    width: 150,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00BDD6',
  },
  textbutton: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  textEmail: {
    height: 40,
    width: 200,
    marginLeft: 20,
  },
});

export default Screen1;
