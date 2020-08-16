import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PromoDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is PromoDetailScreen</Text>
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

export default PromoDetailScreen;