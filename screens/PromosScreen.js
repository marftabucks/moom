import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PromosScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is PromosScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default PromosScreen;