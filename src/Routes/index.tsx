import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './StackParams';
import {Favourites} from '../Screens/Favourites';
import {SearchScreen} from '../Screens/SearchScreen';
import {BlackList} from '../Screens/BlackList';
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Favourites">
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="BlackList" component={BlackList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
