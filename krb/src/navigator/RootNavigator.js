import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from "../screen/dashboard/index";
import SearchScreen from "../screen/search/index";

const RootStack = createNativeStackNavigator();


const RootNavigator = () => {
    return (
        <String></String>
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: true }} mode={"modal"}>
            <RootStack.Screen name="Dashboard" component={DashboardScreen} />
            <RootStack.Screen name="Search" component={SearchScreen} />

            </RootStack.Navigator>
        </NavigationContainer>
    )
}


RootNavigator.displayName = "RootNavigator"

export default RootNavigator