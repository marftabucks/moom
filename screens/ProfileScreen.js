import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Image, Text} from 'react-native';

import HeadingText from '../components/HeadingText';
import DefaultText from '../components/DefaultText';
import SubText from '../components/SubText';
import SmallText from '../components/SmallText';
import Colors from '../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileScreen = props => {
    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <Image source={require('../assets/avatar.jpg')} style={styles.avatar}/>
                <View style={styles.brief}>
                    <HeadingText style={{marginBottom: 20}}>Ardhi Wida</HeadingText>
                    <SmallText style={{color: Colors.secondary, fontSize: 12}}>200 reviews</SmallText>
                    <SmallText style={{color: Colors.secondary, fontSize: 12}}>joined August 2020</SmallText>
                </View>
            </View>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 100,
        marginBottom: -70,
        zIndex: 99
    },
    brief: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
        paddingBottom: 40,
        paddingHorizontal: 100,
        backgroundColor: 'white',
        borderRadius: 150,
        marginBottom: 30,
        backfaceVisibility: 'hidden'
    }
});

export default ProfileScreen;