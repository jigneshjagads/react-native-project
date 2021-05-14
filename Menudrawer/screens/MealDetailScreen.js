import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
  } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';


const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Category Home" onPress={
                () => {
                    props.navigation.popToTop();
                }
            } />
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const ReusableItem = ({ onPress }) => <Item title="Edit" onPress={onPress} />;

    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (
            // <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            //     <Item title="Edit" onPress={onPress} />;
            // </HeaderButtons>
            <Text>ERROR</Text>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen