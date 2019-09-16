import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'dan';
    return <View>
            <Text style={styles.textStyle1}> React Native </Text>
            <Text style={styles.textStyle2}> My name is {name} </Text>
        </View>    
};

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ComponentsScreen;