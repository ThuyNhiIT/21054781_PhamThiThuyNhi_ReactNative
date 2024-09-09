import React from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'

const YourApp = () => {
  return (
   <View style={styles.container}>
    <Text style = {styles.text}> Doraemon</Text> 
    <Image source = {{uri: "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"}} style={        {height:240, width:200}}/> 
   
   </View>
  );

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"pink",
    justifyContent: "center", // DỌC flex-end: cuối, flex-start: đầu
    alignItems: "center" // NGANG
  },

  text:{
    fontWeight: "bold"
  }
});

export default YourApp