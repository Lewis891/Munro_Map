import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        marginBottom: 50,
        top: 20,
    },
    container: {
        marginHorizontal: '5%',
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    containerText: {
        fontSize: 50,
        fontWeight: '500',
        color: 'black',
    },
});

const Munro_Map = () => {
    return (
        <View>
            <View style = {styles.center}>
                <Text style={styles.title}>Welcome to Munro Map</Text>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.containerText}>Test 1</Text>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.containerText}>Test 2</Text>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.containerText}>Test 3</Text>
            </View>
        </View>
    );
};

export default Munro_Map;

