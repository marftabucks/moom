import React, { Component } from 'react';
import { View, Text ,Picker, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import axios from 'react-native-axios';
import Colors from '../constants/colors'
import DefaultText from '../components/DefaultText'
import SubText from '../components/SubText';



export default class FindMe extends Component {
	state = {
		location: null,
		errorMessage: null,
		mallList: [],
		pasarList: []
	};

	findCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const latitude = JSON.stringify(position.coords.latitude);
				const longitude = JSON.stringify(position.coords.longitude);

				this.setState({
					latitude,
					longitude
				});
			},
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};

	findCurrentLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);

		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permission to access location was denied'
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({ location });
		var latitude;
        var longitude;
		if (this.state.errorMessage) {
			console.log( this.state.errorMessage);
		} else if (this.state.location) {
            latitude = JSON.stringify(this.state.location.coords.latitude);
            longitude = JSON.stringify(this.state.location.coords.longitude)
		}
        console.log(latitude,longitude)
        const data = {
            latitudeMall: latitude,
            longitudeMall: longitude,
            latitudePasar: latitude,
            longitudePasar: longitude,
		};
		var temp = axios.post('http://172.20.10.3:8000/api/mall_pasar', data)
            .then((res) => {
                console.log(`Status: ${res.status}`);
				return res.data.data
            }).catch((err) => {
                console.error(err);
			});
		let temp1 = await temp

		this.setState({
				mallList: temp1.mallName,
				pasarList: temp1.pasarName
		})	
	
	};

	render() {

		return (
			<View>
				<TouchableOpacity onPress={this.findCurrentLocationAsync}>
				  	<SubText color={Colors.secondary}>Your Location</SubText>
				</TouchableOpacity>
				<DefaultText color="white">{this.state.mallList[0]} </DefaultText>
			</View>
		);
	}
}


