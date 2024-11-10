import {
  Text,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
const data = [
  {
    id: 1,
    name: 'Nhi',
    email: 'phamnhi@',
  },
  {
    id: 2,
    name: 'Nhi',
    email: 'phamnhi@',
  },
  {
    id: 3,
    name: 'Nhi',
    email: 'phamnhi@',
  },
];



const Item = ({ name, email }) => (
  <View style={styles.item}>
    <Text style={styles.nameText}>{name}</Text>
    <Text style={styles.emailText}>{email}</Text>
  </View>
);
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.action}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item name={item.name} email={item.email} />
          )}
          keyExtractor={(item) => item.id}
        /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  action: {},
  button: {
    backgroundColor: '#26c3d9',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#f9f9f9', 
    borderRadius: 10, 
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5, 
  },
  emailText: {
    fontSize: 16,
    color: '#555',
  },
});
