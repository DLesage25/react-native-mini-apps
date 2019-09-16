import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'dan' , age: '21'},
        {name: 'carl', age: '22' },
        {name: 'what', age: '23' },
        {name: 'ari' , age: '24'}
    ]

   return (
        <FlatList 
            data={friends} 
            keyExtractor={(friend) => friend.name}
            renderItem={({item, index}) => {  
                return <Text style={styles.textStyle}> 
                    {item.name + ' - age: ' + item.age} 
                </Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;