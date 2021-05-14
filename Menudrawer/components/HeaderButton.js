import React from 'react'
import { StyleSheet, Image, Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'

import Colors from '../constants/Colors'

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={
                <Image
                    source={require("../assets/images/heart.png")}
                    resizeMode={"contain"}
                    style={styles.tabIcon}
                />
            }
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
        />
    );
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 21,
        height: 21,
    },
});

export default CustomHeaderButton