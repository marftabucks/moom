import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import SmallHorizontalTileItem from './SmallHorizontalTileItem';


const SmallHorizontalTile = props => {

    return ( 
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {/* FlatList goes here */}
                <View style={styles.column}>
                    <SmallHorizontalTileItem 
                        text='bag & shoes' />
                    <SmallHorizontalTileItem text='food & drinks' />
                </View>
                <View style={styles.column}>
                    <SmallHorizontalTileItem text='fashion & accessories' />
                    <SmallHorizontalTileItem text='dept. store & supermarkets' />
                </View>
                <View style={styles.column}>
                    <SmallHorizontalTileItem text='health & beauty' />
                    <SmallHorizontalTileItem text='electronics, it & gadget' />
                </View>
                <View style={styles.column}>
                    <SmallHorizontalTileItem text='sports & lifestyle' />
                    <SmallHorizontalTileItem text='kids, toys & maternity' />
                </View>
            </ScrollView>
        </View>
    ); 
};

const styles = StyleSheet.create({
    container: {
        height: 260,
        flexDirection: 'row',
    },
    column: {
        height: '100%',
        justifyContent: 'space-between',
        marginRight: 10
    },
});

export default SmallHorizontalTile;