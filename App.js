import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import axios from 'react-native-axios';

import HomeScreen from './screens/HomeScreen';
import MainNav from './navigations/MainNav';
import Colors from './constants/colors';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'futura-condensed-xbold': require('./fonts/Futura-CondensedExtraBold-05.ttf'),
    'futura-condensed-medium': require('./fonts/Futura-CondensedMedium-04.ttf'),
    'futura-bold': require('./fonts/Futura-Bold-03.ttf'),
    'futura-medium': require('./fonts/Futura-Medium-01.ttf'),
    'futura-mediumitalic': require('./fonts/Futura-MediumItalic-02.ttf'),
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }
  
  return (
      <MainNav />
  );
}
