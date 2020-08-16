import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Input from '../components/Input'
import Card from '../components/Card';
import Colors from '../constants/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShopsScreen = props => {
    return (
        <SafeAreaView >
            <View style={styles.screen}>
                <View style={styles.inputContainer}>
                    <Input placeholder="what would you like to search?" color='primary' />           
                </View>

                <View style={styles.shops}>
                    {/* FlatList goes here */}
                    <ScrollView contentContainerStyle={styles.shopContainer} showsVerticalScrollIndicator={false}>
                        <Card 
                            image='https://static.dezeen.com/uploads/2019/02/new-zara-logo-sq-1-1024x1024.jpg'
                            name='Zara'
                            category='fashion'
                            rating='4.5'
                            location='location unknown'
                            mall='Margo City'
                            onPress={() => {
                                props.navigation.navigate({
                                    routeName: 'ShopDetail', 
                                    params: {
                                        id: 'xxx',
                                        image: 'https://static.dezeen.com/uploads/2019/02/new-zara-logo-sq-1-1024x1024.jpg',
                                        name:'Zara',
                                        category:'fashion',
                                        rating:'4.5',
                                        location:'location unknown',
                                        mall:'Margo City' 
                                    }
                                });
                            }}
                        />
                    
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 80
    },
    inputContainer: {
        width: '95%',
        alignItems: 'center'
    },
    shops: {
        flex: 1,
        marginTop: 20,
        width: '100%',
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: 'hidden',
        paddingBottom: 10,

    },
    shopContainer: {
        paddingTop: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    
});

ShopsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Shops',
        headerTintColor: Colors.primary
    }
}

export default ShopsScreen;