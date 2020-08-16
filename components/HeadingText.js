import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const HeadingText = props => {
    let textColor = Colors.primary;

    if (props.color) {
        textColor = props.color;
    }

    return (
        <View>
            <Text style={{ ...styles.text, ...props.style, color: textColor}}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'futura-bold',
        fontSize: 18,
        marginBottom: 10
    }
});

export default HeadingText;