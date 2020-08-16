import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import DefaultText from './DefaultText';

const SmallHorizontalTileItem = props => {
    return (
        <TouchableOpacity style={styles.box}>
            <View style={styles.item}>
                <DefaultText style={styles.text}>{props.text}</DefaultText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 120,
        width: 120,
        borderRadius: 30,
        overflow: 'hidden'
    },
    item: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    text: {
        textAlign: 'center'
    }
});

export default SmallHorizontalTileItem;