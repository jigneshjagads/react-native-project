import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    Platform
} from 'react-native';

import styles from "./style";

const DashboardScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
          <Text>Hello world</Text>
        </View>
    );
};

export default DashboardScreen