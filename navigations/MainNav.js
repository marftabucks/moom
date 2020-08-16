import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeNav from './HomeNav';
import Colors from '../constants/colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: 'transparent'
    },
    headerBackTitleStyle: {
        fontFamily: 'futura-bold',
        fontSize: 18,
    },
    headerTintColor: Colors.primary
};

const MainNav = createStackNavigator({
        HomeNav: { screen: HomeNav }
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
        headerShown: false,
        headerVisible: false,
    }
   }
  );

export default createAppContainer(MainNav);