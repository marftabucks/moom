import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList, SafeAreaView } from 'react-native';
import HeadingText from '../components/HeadingText';
import DefaultText from '../components/DefaultText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors'

const data = [
    {id: '92839223', name: 'Ahmad', rating: '4', review:'Sangat bagus. Sesuai dengan deskripsi dan lokasinya sangat mudah ditemukan oleh pembeli yang baru seperti saya.'},
    {id: '92839224', name: 'Bayu', rating: '3', review:'Kualitas barangnya kurang bagus'},
    {id: '92839225', name: 'Wong', rating: '5', review:'Mantap tenan'},
    {id: '92839226', name: 'Sekar', rating: '4.5', review:'Sesuai ekspektasi'},
    {id: '92839227', name: 'Cilla', rating: '4', review:'Ada harga ada kualitas'},
    {id: '92839228', name: 'Ayu', rating: '4.5', review:'Penjualnya sangat ramah dan sabar'},
]

const ReviewScreen = props => {
    const renderItem = (itemData) => {
        return (
            <View style={styles.item}>
                <View style={styles.header}>
                    <HeadingText>{itemData.item.name}</HeadingText>
                    <HeadingText>{itemData.item.rating} / 5</HeadingText>
                </View>
                <DefaultText>{itemData.item.review}</DefaultText>
            </View>
        );
    };
    
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <FlatList 
                    data={data} 
                    renderItem={renderItem} 
                    showsVerticalScrollIndicator={false}
                    style={{paddingTop: 20}}
                />
            </View>
            <View style={styles.buttonContainer}>
                <MainButton>GET DIRECTION</MainButton>
            </View>
        </SafeAreaView>
    );
}

ReviewScreen.navigationOptions = {
    headerTitle: 'Reviews'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    container: {
        marginTop: 80,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        overflow: 'hidden',
        backfaceVisibility: 'hidden'
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        height: 225,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.16,
        shadowRadius: 30,
        elevation: 1,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    buttonContainer: {
        padding: 10,
        backgroundColor: 'white'
    },
});

export default ReviewScreen;