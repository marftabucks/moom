import React from 'react';
import { ScrollView, View, Text, Touchable, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/colors';
import SubText from '../components/SubText';
import DefaultText from '../components/DefaultText';
import HeadingText from '../components/HeadingText';
import Input from '../components/Input';
import { Location, kumpulanMall, kumpulanPasar } from '../components/Location';
import HorizontalTile from '../components/HorizontalTile';
import SmallHorizontalTile from '../components/SmallHorizontalTile';
import Directory from '../components/Directory';
import ShopList from '../components/ShopList';
import axios from 'react-native-axios';

const shopsData = [
     {
        "imageUrl": "https://radardepok.com/wp-content/uploads/2019/09/ftc-16-23.jpg",
        "key": "5f37a124356b8617540aa5cf",
        "location": "3rd Floor",
        "name": "Toko Buku Cilla",
        "rating": "4.5",
        "mall": "Superindo Tajur Mall",
        "category": "Fashion & Accessories"
      },
       {
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9Vxgoki54CPIXKu8T2PF4iqVpZp5Nbe2AUw&usqp=CAU",
        "key": "5f37a2c9356b8617540aa5d6",
        "location": "2nd Floor",
        "name": "Naispudding",
        "rating": "4",
        "mall": "Superindo Tajur Mall",
        "category": "Food & Drinks"
      },
       {
        "imageUrl": "https://img.solopos.com/posts/2019/06/01/995446/29pojok-usaha-unggah.jpg?w=375&h=250",
        "key": "5f37a4f7356b8617540aa5dd",
        "location": "3rd Floor",
        "name": "Toko Baju Abe",
        "rating": "4.5",
        "mall": "Superindo Tajur Mall",
        "category": "Fashion & Accessories"
      },
       {
        "imageUrl": "https://pbs.twimg.com/profile_images/2564661962/66mln5trnbdx9p07yc5m.jpeg",
        "key": "5f37a648356b8617540aa5e3",
        "location": "1st Floor",
        "name": "Siregar Shop",
        "rating": "5",
        "mall": "Superindo Tajur Mall",
        "category": "Fashion & Accessories"
      },
       {
        "imageUrl": "https://www.goodnewsfromindonesia.id/uploads/post/large-photogrid-1562749655025-b55c0b38787e4a54973806b85c23b090.jpg",
        "key": "5f37a834356b8617540aa5e9",
        "location": "1st Floor",
        "name": "Toko Kelontong Jason",
        "rating": "4.5",
        "mall": "Superindo Tajur Mall",
        "category": "Dept. Store & Supermarkets"
      }
]

const mallsData = [
    {
       "imageUrl": "https://infopromodiskon.com/userfiles/uploads/botani-square.png",
       "key": "5f37a124356b8617540aa5sdcf",
       "location": "Jl. Pajajaran",
       "name": "Botani Square",
     },
      {
       "imageUrl": "https://www.lippomalls.com/storage/mall/October2019/tO33mrrYSJ9g4WXorfbj.jpg",
       "key": "5f37a2c9356b8617540aa5dsdsd6",
       "location": "Jl. Tajur",
       "name": "Ekalokasari Bogor",
     },
      {
       "imageUrl": "https://jabar.pojoksatu.id/wp-content/uploads/2017/12/lippo-390x250.png",
       "key": "sdsdsds",
       "location": "Pajajaran",
       "name": "Lippo Keboen Raya",
     },
      {
       "imageUrl": "https://www.ayobogor.com/images-bogor/post/articles/2020/07/20/7828/img-20200713-wa0038.jpg",
       "key": "5f37a648356b8617540dsdsdsaa5e3",
       "location": "Jl. Juanda",
       "name": "Bogor Junction",
     },
      {
       "imageUrl": "https://infopromodiskon.com/userfiles/uploads/bellanova-country-mall.jpg",
       "key": "sdsdsdsdssd",
       "location": "Sentul",
       "name": "Bellanova",
     }
]

const HomeScreen = props => {


    // async function test(){
    //     const data = {
    //         latitudeMall: "-6.6384691",
    //         longitudeMall: "106.8277846",
    //         latitudePasar: "-6.6384691",
    //         longitudePasar: "106.8277846",
	// 	};
	// 	var tempMall = axios.post('http://172.20.10.3:8000/api/mall_pasar', data)
    //         .then((res) => {
    //             console.log(`Status: ${res.status}`);
	// 			return res.data.data
    //         }).catch((err) => {
    //             console.error(err);
	// 		});
    //     let tempMall1 = await tempMall
    //     mallsData = tempMall.mallName



    //  temp =  axios.get('http://172.20.10.3:8000/api/shop')
    //         .then(async function (response) {
    //             //console.log( response.data.data[0]);
    //             return response.data
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //          shop = await temp

    //          for(let i = 0;i< shop.data.length;i++)
    //          {
    //             var objA = {
    //                 key: shop.data[i]._id,
    //                 imageUrl: shop.data[i].detail.link,
    //                 name: shop.data[i].detail.name,
    //                 location: shop.data[i].detail.location
    //             }
    //             shopsData.push(objA)
    //          }
    // }
    //     test()

    

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false} horizontal={false}>
                <ShopList />
                <View style={styles.utilitiesContainer}>
                    <Location />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity>
                            <Ionicons name='ios-bookmark' size={35} color="white"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {props.navigation.navigate('Profile')}}>
                            <MaterialIcons name='account-circle' size={35} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View>
                    <Input placeholder="what would you like to search?" maxLength={30} color='white'/>
                </View>
                
                <View style={{ ...styles.section, ...styles.directorySection}}>
                    <HeadingText color="white" style={{marginHorizontal: 10}}>Directory</HeadingText>
                    <Directory />
                </View>
                
                <View style={styles.section}>
                    <View style={styles.heading}>
                        <HeadingText color="white">Category</HeadingText>
                        <TouchableOpacity onPress={() => {props.navigation.navigate('Categories')}}>
                            <SubText color={Colors.secondary}>see all</SubText>
                        </TouchableOpacity>
                    </View>
                    <SmallHorizontalTile navigation={props.navigation} />
                </View> 
                
                <View style={styles.section}>
                    <View style={styles.heading}>
                        <HeadingText color="white">Shops you might like</HeadingText>
                        <TouchableOpacity onPress={() => {props.navigation.navigate('Shops')}}>
                            <SubText color={Colors.secondary}>see all</SubText>
                        </TouchableOpacity>
                    </View>
                    <HorizontalTile data={shopsData} routeName='ShopDetail' navigation={props.navigation} />
                </View>
                
                <View style={styles.section}>
                    <View style={styles.heading}>
                        <HeadingText color="white">Malls near you</HeadingText>
                        <TouchableOpacity onPress={() => {props.navigation.navigate('Malls')}}>
                            <SubText color={Colors.secondary}>see all</SubText>
                        </TouchableOpacity>
                    </View>
                    <HorizontalTile data={mallsData} routeName='MallDetail' navigation={props.navigation}/>
                </View>
            </ScrollView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        paddingTop: 30,
        paddingBottom: 10,
    },
    contentContainer: {
        width: '95%'
    },
    utilitiesContainer: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 15
    },
    buttonContainer: {
        width: '20%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent:'space-between'
    },
    section: {
        flex: 0,
        marginTop: 45,
        marginHorizontal: 5,
        justifyContent: 'center'
    },
    directorySection: {
        marginTop: 20
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10
    }
    
    
})

export default HomeScreen;