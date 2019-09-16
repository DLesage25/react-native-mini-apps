import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return ( 
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button 
        title='Go to Components Demo'
        onPress={() => { navigate('Components') }} 
        />
      <Button 
        title='Go to List Demo'
        onPress={() => { navigate('List') }} 
        />
      <Button 
        title='Go to Image Screen'
        onPress={() => { navigate('Image') }} 
        />
      <Button 
        title='Go to Counter Screen'
        onPress={() => { navigate('Count') }} 
        />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
