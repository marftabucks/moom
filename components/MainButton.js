import React from 'react';
import { Platform, TouchableOpacity, TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <ButtonComponent onPress={props.onPress} activeOpacity={0.9}>
            <View style={{...styles.button, ...props.style}}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </ButtonComponent>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    text: {
        color: 'white',
        fontFamily: 'futura-medium',
        fontSize: 15,
        textAlign: 'center'
    }
});

export default MainButton;