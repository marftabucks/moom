import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoadingScreen = props => {
    return (
        <View style={styles.screen}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    logo: {
        width: 250,
        height: 250,
    }
});

export default LoadingScreen;