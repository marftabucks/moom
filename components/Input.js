import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const Input = props => {
    const [inputValue, setInputValue] = useState('');

    const inputChangeHandler = (inputText) => {
        setInputValue(inputText);
    };

    return (
        <TextInput {...props}
            style={{ 
                ...styles.input, 
                fontFamily: inputValue ? 'futura-medium' : 'futura-mediumitalic',
                backgroundColor: props.color === 'white' ? 'white' : Colors.primary,
                color: props.color === 'white' ? Colors.primary : 'white',
                ...props.style,
            }}
            maxLength={30}
            onChangeText={(text) => inputChangeHandler(text)}
            value={inputValue}
            placeholder={props.placeholder}
            placeholderTextColor={Colors.secondary}
            underlineColorAndroid="rgba(0,0,0,0)"
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 30
    },
})

export default Input;