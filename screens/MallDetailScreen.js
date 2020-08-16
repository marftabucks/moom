import React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView, Image,} from 'react-native';

import HeadingText from '../components/HeadingText';
import DefaultText from '../components/DefaultText';
import SmallText from '../components/SmallText';
import MainButton from '../components/MainButton';
import Tabs from '../components/Tabs';

import Colors from '../constants/colors';

const MallDetailScreen = props => {
    const mallInfo = {
        id: props.navigation.getParam('id'),
        image: props.navigation.getParam('image'),
        name: props.navigation.getParam('name'),
        location: props.navigation.getParam('location'),
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: mallInfo.image}} style={styles.mallImage} resizeMode="cover"/>
                </View>
                <View style={styles.details}>
                    <HeadingText style={{marginBottom: 5}}>{mallInfo.name}</HeadingText>
                    <DefaultText>{mallInfo.location}</DefaultText>      
                </View>
                <View style={styles.buttonContainer}>
                    <MainButton>VIEW SHOPS</MainButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    imageContainer: {
        height: 500,
        marginBottom: -40
    },
    mallImage: {
        height: '100%',
        width: '100%'
    },
    details: {
        paddingVertical: 35,
        paddingHorizontal: 30,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: 'hidden',
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        padding: 10
    }
});

export default MallDetailScreen;