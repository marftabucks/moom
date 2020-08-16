import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const SubText = props => {
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
        fontFamily: 'futura-medium',
        fontSize: 12
    }
});

export default SubText;