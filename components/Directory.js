import React, { Component } from 'react';
import {View, Modal, TouchableOpacity, StyleSheet, Image, ScrollView, Text} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import { Ionicons } from '@expo/vector-icons';

import MainButton from './MainButton';

const images = [
    {url: '', props: { source: require('../assets/1stfloor-01.png')}},
    {url: '', props: { source: require('../assets/2ndfloor-01.png')}},
    {url: '', props: { source: require('../assets/3rdfloor-01.png')}},
];

class Directory extends Component {
    state = {
        modalVisibility: false
    }
    
    toggleModalHandler = (visibility) => {
        this.setState({
            modalVisibility: visibility
        })
    }

    render(){
        return (
            <View>
                <Modal visible={this.state.modalVisibility} animationType='fade' transparent={true} onRequestClose={() => {this.toggleModalHandler(false)}}>
                    <ImageViewer imageUrls={images} backgroundColor='white' enableSwipeDown={true} onCancel={() => {this.toggleModalHandler(false)}}>
                        {/* <View style={styles.buttonContainer}>
                            <MainButton onPress={() => {this.toggleModalHandler(false)}}><Ionicons name='ios-close' size={35} color="white"/></MainButton>
                        </View> */}
                    </ImageViewer>
                </Modal>
    
                <TouchableOpacity style={styles.directoryImageContainer} onPress={() => {this.toggleModalHandler(true)}}>
                    <View style={styles.directoryImage}>
                        <Image source={require('../assets/1stfloor-01.png')} style={styles.thumbnailImage} resizeMode='repeat'/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    directoryImageContainer: {
        height: 225,
        borderRadius: 20,
        overflow: 'hidden',
        padding: 10,
        backgroundColor: 'white'
    },
    directoryImage: {
        flex: 1,
        backgroundColor: 'white'
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '95%',
        height: '60%',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: '100%',
        borderRadius: 40,
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    detailDirectoryImage: {
        width: '100%',
    },
    thumbnailImage: {
        width: '100%',
        height: '100%'
    },
    buttonContainer: {
        width: '20%',
        alignItems: 'center'
    }
})

export default Directory;