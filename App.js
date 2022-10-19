import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from './src/consts/color';
import DetailScreen from './src/views/screens/DetailScreen';
import Navigation from './src/views/navigation/Navigation';
import BoardScreen from './src/views/screens/BoardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={BoardScreen} />
        <Stack.Screen name="Home" component={Navigation} />
        <Stack.Screen name="DetailsScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;