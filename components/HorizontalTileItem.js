import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';

import DefaultText from './DefaultText';
import SubText from './SubText';

const HorizontalTileItem = props => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View>
                <Image source={{uri: props.imageUrl}} style={styles.image}/>
                <View style={styles.details}>
                    <DefaultText>{props.heading}</DefaultText>
                    <SubText>{props.subtext}</SubText>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: 200,
        marginRight: 15,
        borderRadius: 30,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    image: {
        height: '70%',
        width: '100%',
        resizeMode: 'cover',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    details: {
        paddingHorizontal: 15,
        paddingTop: 10
    }
})

export default HorizontalTileItem;