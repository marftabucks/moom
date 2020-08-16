import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import MallDetailScreen from '../screens/MallDetailScreen';
import MallsScreen from '../screens/MallsScreen';
import ShopsScreen from '../screens/ShopsScreen';
import ShopDetailScreen from '../screens/ShopDetailScreen';
import ShopDirectionScreen from '../screens/ShopDirectionScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ReviewScreen from '../screens/ReviewScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Colors from '../constants/colors';

const defaultNavOptions = {
    headerTransparent: true,
    headerTitleStyle: {
        fontFamily: 'futura-bold',
        fontSize: 18,
    },
    headerBackTitleStyle: {
        fontFamily: 'futura-bold',
        fontSize: 18,
    },
};

const HomeNav = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: ''
        }
    },
    MallDetail: {
        screen: MallDetailScreen,
        navigationOptions: {
            headerTitle: 'Malls',
            headerTintColor: Colors.primary
        }
    },
    Malls: {
        screen: MallsScreen,
        navigationOptions: {
            textAlign: 'center',
            headerTintColor: Colors.primary
        }
    },
    Shops: { 
        screen: ShopsScreen,
        navigationOptions: {
            textAlign: 'center',
            headerTintColor: Colors.primary
        } 
    },
    ShopDetail: {
        screen: ShopDetailScreen,
        navigationOptions: {
            headerTitle: '',
            headerTintColor: Colors.primary
        } 
    },
    ShopDirection: {
        screen: ShopDirectionScreen,
    },
    Products: {
        screen: ProductsScreen,
        navigationOptions: {
            headerTitle: 'Products',
            headerTintColor: 'white'
        }
    },
    Review: {
        screen: ReviewScreen,
        navigationOptions: {
            headerTitle: 'Reviews',
            headerTintColor: 'white'
        }
    },
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Categories',
            headerTintColor: Colors.primary
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            headerTitle: 'Hello',
            headerTintColor: 'white',
            headerTitleAlign: 'center'
        }
    }
},
{
    defaultNavigationOptions: defaultNavOptions
});

export default HomeNav;