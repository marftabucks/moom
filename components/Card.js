import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import DefaultText from './DefaultText';
import SmallText from './SmallText';
import SubText from './SubText';

const Card = props => {
    
    const rating = props.rating ? <SmallText>{props.rating}/5</SmallText> : null;
    const mall = props.mall ? <SubText>{props.mall}</SubText> : null;
    const category = props.category ? <SmallText>{props.category}</SmallText> : null;

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.touchableOpacity} onPress={props.onPress}>
                <View style={styles.card}>
                    <Image source={{uri: props.image}} style={styles.image}/>
                    <View style={styles.details}>
                        <View style={styles.header}>
                            <View>
                                <DefaultText>{props.name}</DefaultText>
                                {category}
                            </View>
                            {rating}
                        </View>
                        <View>
                            <SubText>{props.location}</SubText>
                            {mall}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 40,
        overflow: 'hidden',
        width: '98%',
        height: 150,
        marginBottom: 15,
        justifyContent: 'center'
    },
    touchableOpacity: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        flex: 1,
        height: '100%',
        width: '40%',
        borderRadius: 40
    },
    details: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingLeft: 15,
        paddingRight: 25
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default Card;