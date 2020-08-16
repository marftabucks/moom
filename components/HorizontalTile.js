import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native'

import HorizontalTileItem from './HorizontalTileItem';

class HorizontalTile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {/* Flatlist goes here */}
                    {this.props.data.map(item => {console.log(item.key);
                        return <HorizontalTileItem 
                        key={item.key}
                        imageUrl={item.imageUrl} 
                        heading={item.name} 
                        subtext={item.location}
                        onPress={() => {
                            this.props.navigation.navigate({
                                routeName: this.props.routeName,
                                params: {
                                    id: item.id,
                                    image: item.imageUrl,
                                    name: item.name,
                                    location: item.location,
                                    rating: item.rating,
                                    mall: item.mall,
                                    category: item.category
                                }
                            })
                        }}
                    />})}
                </ScrollView>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        height: 275,
        flexDirection: 'row',
    },
    
});

export default HorizontalTile;