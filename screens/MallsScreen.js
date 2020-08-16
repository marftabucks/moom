import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Input from '../components/Input'
import Card from '../components/Card';
import Colors from '../constants/colors'

const MallsScreen = props => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.inputContainer}>
                <Input placeholder="what would you like to search?" color='primary' />           
            </View>

            <View style={styles.shops}>
                {/* FlatList goes here */}
                <ScrollView contentContainerStyle={styles.shopContainer} showsVerticalScrollIndicator={false}>
                    <Card 
                        image='https://infopromodiskon.com/userfiles/uploads/logo-botani-square.jpg'
                        name='Botani Square'
                        location='location unknown'
                        onPress={() => {
                            props.navigation.navigate({
                                routeName: 'MallDetail', 
                                params: {
                                    id: 'xxx',
                                    image: 'https://infopromodiskon.com/userfiles/uploads/logo-botani-square.jpg',
                                    name:'Botani Square',
                                    location:'location unknown',
                                }
                            });
                        }}
                    />
                
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 80,
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

export default MallsScreen;