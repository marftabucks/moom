import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

import DefaultText from './DefaultText';

const CategoryGridTile = props => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComponent 
            activeOpacity={0.8}
            style={{flex: 1}}
            onPress={props.onPress}>
                <View style={styles.container}>
                    <DefaultText style={styles.name} numberOfLines={2}>{props.name}</DefaultText>
                </View>
            </TouchableComponent>
        </View>
        
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius: 30,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        textAlign: 'center'
    }
});

export default CategoryGridTile;