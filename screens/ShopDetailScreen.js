import React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView, Image,} from 'react-native';

import HeadingText from '../components/HeadingText';
import DefaultText from '../components/DefaultText';
import SmallText from '../components/SmallText';
import MainButton from '../components/MainButton';
import Tabs from '../components/Tabs';

import Colors from '../constants/colors';

const ShopDetailScreen = props => {

    const shopInfo = {
        id: props.navigation.getParam('id'),
        image: props.navigation.getParam('image'), 
        name: props.navigation.getParam('name'),
        category: props.navigation.getParam('category'),
        rating: props.navigation.getParam('rating'),
        location: props.navigation.getParam('location'),
        mall: props.navigation.getParam('mall')
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: shopInfo.image}} style={styles.shopImage} resizeMode="cover"/>
                </View>
                <View style={styles.details}>
                    <Tabs shopId={shopInfo.id} navigation={props.navigation}/>
                    <View style={styles.tabContent}>
                        <View style={styles.header}>
                            <View>
                                <HeadingText style={{marginBottom: 5}}>{shopInfo.name}</HeadingText>
                                <SmallText>{shopInfo.category}</SmallText>
                            </View>
                            <SmallText>{shopInfo.rating}/5</SmallText>
                        </View>
                        <View>
                            <DefaultText>{shopInfo.location}</DefaultText>
                            <DefaultText>{shopInfo.mall}</DefaultText>
                        </View>            
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <MainButton>GET DIRECTION</MainButton>
            </View>
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
    shopImage: {
        height: '100%',
        width: '100%'
    },
    details: {
        paddingVertical: 35,
        paddingHorizontal: 30,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: 'hidden',
        backgroundColor: 'white'
        
    },
    
    tabContent: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 10
    }
});

export default ShopDetailScreen;