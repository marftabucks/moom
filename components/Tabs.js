import React from 'react';
import { View, StyleSheet } from 'react-native';

import TabButton from './TabButton'; 

const Tabs = props => {
    return (
        <View style={styles.tabContainer}>
            <TabButton>overview</TabButton>
            <TabButton 
                status='inactive' 
                onPress={() => {props.navigation.navigate({
                    routeName: 'Products',
                    params: {
                        shopId: props.shopId
                    }
                })
            }}>
                products
            </TabButton>
            <TabButton 
                status='inactive' 
                onPress={() => {props.navigation.navigate({
                    routeName: 'Review',
                    params: {
                        shopId: props.shopId
                    }
                })
            }}>
                reviews
            </TabButton>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    
});

export default Tabs;