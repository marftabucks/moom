import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const DefaultText = props => {
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
        fontFamily: 'futura-medium',
        fontSize: 15
    }
});

export default DefaultText;