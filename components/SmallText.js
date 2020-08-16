import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const SmallText = props => {
    let textColor = Colors.primary;

    if (props.color) {
        textColor = props.color;
    }

    return (
        <View style={styles.container}>
            <Text style={{ ...styles.text, ...props.style, color: textColor}}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5
    },
    text: {
        fontFamily: 'futura-mediumitalic',
        fontSize: 10,
        fontWeight: '100'
    }
});

export default SmallText;