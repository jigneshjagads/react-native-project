import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DashboardScreen from "../screen/dashboard/index";
import SearchScreen from "../screen/search/index";

const RootStack = createStackNavigator();


const RootNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }} mode={"modal"}>
            <RootStack.Screen name="Dashboard" component={DashboardScreen} />
            <RootStack.Screen name="Search" component={SearchScreen} />

            </RootStack.Navigator>
        </NavigationContainer>
    )
}


RootNavigator.displayName = "RootNavigator"

export default RootNavigator