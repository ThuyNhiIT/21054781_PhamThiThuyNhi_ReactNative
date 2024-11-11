import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const S1 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const handleEmail = (input) => {
    setEmail(input);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A premium online store for sporter and their stylish choice
      </Text>

      <Image source={require('../assets/S1.png')} style={styles.img} />

      <Text style={styles.shop}>POWER BIKE SHOP</Text>
      <View style={styles.email}>
        <Icon name="envelope"></Icon>
        <TextInput
          placeholder="Enter your Email"
          style={styles.textEmail}
          onChangeText={handleEmail}
          value={email}></TextInput>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('S2', { email })}>
        <Text style={styles.textButton}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
  },
  img: {
    margin: 30,
    backgroundColor: 'pink',
    borderRadius: 15,
  },
  shop: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 150,
    textAlign: 'center',
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
  textEmail: {
    height: 40,
    width: 200,
    marginLeft: 20,
  },
  button: {
    margin: 20,
    backgroundColor: 'red',
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    marginTop: 30
  },
  textButton: {
    fontWeight: 'bold',
    color: '#fff',
  },

});

export default S1;
