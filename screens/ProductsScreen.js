import React from 'react';
import { View, Text, StyleSheet, FlatList, Platform, SafeAreaView, Image } from 'react-native';

import SubText from '../components/SubText';
import SmallText from '../components/SmallText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors'

const data = [
    {id: '92839223', name: 'Baju', price: '100000', image:'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/12/27/2065521/2065521_c2efb578-baf0-4c19-afea-7c39ebb54f03_554_554.jpg'},
    {id: '92839224', name: 'Celana', price: '150000', image:'https://cf.shopee.co.id/file/040aa100b34357e7ae20950516505793'},
    {id: '92839225', name: 'Dress', price: '300000', image:'https://media.missguided.com/s/missguided/DD921696_set/1/navy-floral-print-milkmaid-midi-dress'},
    {id: '92839226', name: 'Topi', price: '20000', image:'https://dynamic.zacdn.com/3p_TNYxirJLjJeg2sfv9QI-2GF8=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/baellerry-9147-1094802-1.jpg'},
    {id: '92839227', name: 'Jaket', price: '150000', image:'https://www.jakartanotebook.com/images/products/99/63/34565/53/jaket-hoodie-sweatshirt-long-sleeve-size-xl-light-gray-1.jpg'},
    {id: '92839228', name: 'Jam Tangan', price: '300000', image:'https://dynamic.zacdn.com/I4BznOxdfDswdZjpCA5duFyri24=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/digitec-3083-1179481-1.jpg'},
]
 

const ProductsScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <View style={styles.gridItem}>
                <Image source={{uri: itemData.item.image}} style={styles.image}/>
                <View style={styles.details}>
                    <SubText>{itemData.item.name}</SubText>
                    <SmallText>{itemData.item.price}</SmallText>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <FlatList 
                    data={data} 
                    renderItem={renderGridItem} 
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    style={{paddingVertical: 20, marginBottom: 20 }}
                />
            </View>
            <View style={styles.buttonContainer}>
                <MainButton>GET DIRECTION</MainButton>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
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
    gridItem: {
        flex: 1,
        margin: 10,
        height: 225,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 20,
        elevation: 3
    },
    buttonContainer: {
        padding: 10,
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: '70%'
    },
    details: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 15,
        paddingHorizontal: 5,
        backgroundColor: 'white'
    }
});

export default ProductsScreen;