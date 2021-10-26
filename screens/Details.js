import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';

export default class DetailsScreen extends React.Component{
    render(){
        return(
            <View>
                <SafeAreaView/>
                <Text>Details Screen</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardItem: {
      marginBottom: 10
    }
  });
  