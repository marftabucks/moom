import React from 'react';
import { View, Text } from 'react-native';

class ShopList extends React.Component{

    constructor(...args) {
        super(...args);
        this.state = {shop: null};
    }
    async getData() {
        var temp = axios.get('http://172.20.10.3:8000/api/shop')
            .then(function (response) {
                return response.data.data[0].detail;
            })
            .catch(function (error) {
                console.log(error);
            });
            shop = await temp
           // console.log(shop)
    }

    componentDidMount() {
        if (!this.state.shop) {
            this.getData().then(data => this.setState({shop}))
                          .catch(err => { /*...handle the error...*/});
        }
    }
    render() {
        return (
            <View>
                {this.state.shop ? <Text style={{color: 'white'}}>Loading...</Text> : this.state.shop}
            </View>  
        );
    }
}

export default ShopList;