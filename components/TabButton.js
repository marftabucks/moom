import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../constants/colors';


const TabButton = props => {
    let buttonStyle = (
                    <TouchableOpacity disabled={true}>
                        <View style={{ ...styles.tabButton, ...styles.tabButtonActive}}>
                            <Text style={{ ...styles.tabButtonText, ...styles.tabButtonTextActive}}>{props.children}</Text>
                        </View>
                    </TouchableOpacity>
                        );

    if (props.status === 'inactive') {
        buttonStyle = (
                    <TouchableOpacity onPress={props.onPress}>
                        <View style={{ ...styles.tabButton, ...styles.tabButtonInactive}}>
                            <Text style={{ ...styles.tabButtonText, ...styles.tabButtonTextInactive}}>{props.children}</Text>
                        </View>
                    </TouchableOpacity>
                    );
    }

    return buttonStyle;
}

const styles = StyleSheet.create({
    tabButton: {
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },
    tabButtonActive: {
        backgroundColor: Colors.primary,
    },
    tabButtonInactive: {
        backgroundColor: 'white',
    },
    tabButtonText: {
        textAlign: 'center',
        fontFamily: 'futura-medium',
        fontSize: 13
    },
    tabButtonTextActive: {
        color: 'white'
    },
    tabButtonTextInactive: {
        color: Colors.primary
    },
});

export default TabButton;