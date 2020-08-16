import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constants/colors'

const data = [
    {id: '237283', name: 'bag & shoes'},
    {id: '237284', name: 'fashion & accessories'},
    {id: '237285', name: 'health & beauty'},
    {id: '237286', name: 'sports & lifestyle'},
    {id: '237287', name: 'food & drinks'},
    {id: '237288', name: 'dept. store & supermarkets'},
    {id: '237289', name: 'electronics, it & gadget'},
    {id: '237280', name: 'kids, toys & maternity'},
]

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
                name={itemData.item.name}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Shops', 
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }}
            />
       );
    };

    return (
        <View sytle={styles.screen}>  
        
            <View style={styles.list}>
                <FlatList 
                    numColumns={2}
                    data={data}
                    renderItem={renderGridItem}
                    showsVerticalScrollIndicator={false}
                    style={{paddingVertical: 20}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        alignItems: 'center',
    },
    list: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 80,
        backgroundColor: Colors.primary,
        overflow: 'hidden',
        paddingHorizontal: 10,
    }
});

export default CategoriesScreen;