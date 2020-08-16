import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import SubText from '../components/SubText';
import DefaultText from '../components/DefaultText'
import Colors from '../constants/colors'
import FindMe from './FindMe';




export const Location = props => {
    return(
        <View style={styles.locationContainer}>
            <SimpleLineIcons name='location-pin' size={30} color="white"/>
            <View style={styles.location}>
                <SubText color={Colors.secondary}>Your Location</SubText>
                {/* <FindMe/> */}
                <DefaultText color="white">Superindo Tajur Mall</DefaultText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    locationContainer: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'flex-end'
    },
    location: {
        marginLeft: 5,
        justifyContent: 'flex-end'
    }
});