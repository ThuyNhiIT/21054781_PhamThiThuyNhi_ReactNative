import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/eye_icon.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>👁️</Text>
      <TextInput
        style={styles.input}
        placeholder="👤   Please input user name"
      />
      <TextInput
        style={styles.input}
        placeholder="🔒   Please input password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.links}>
        <TouchableOpacity>
          <Text style={styles.link}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.link}> | </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <Text>Other Login Methods</Text>
      <View style={styles.socialIcons}>
        <Image
          source={{
            uri: 'https://e7.pngegg.com/pngimages/770/768/png-clipart-computer-icons-industry-company-others-miscellaneous-computer-network.png',
          }}
          style={styles.icon}
        />
        <Image
          source={{ uri: 'https://www.svgrepo.com/show/61290/wifi-logo.svg' }}
          style={styles.icon}
        />
        <Image
          source={{
            uri: 'https://banner2.cleanpng.com/20171202/5b3/av2p41mdc.webp',
          }}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 100,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  links: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  link: {
    color: '#007bff',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    margin: 20,
  },
  button: {
    backgroundColor: '#386FCC',
    width: '90%',
    marginStart: -25,
    marginTop: 50,
    height: 50,
    flex: 'row',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
