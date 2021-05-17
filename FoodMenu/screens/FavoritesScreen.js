import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomeHeaderButton from '../components/HeaderButton'
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return (
    <MealList listData={favMeals} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft:
      (
        <HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
          <Item title="Menu" iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
  }
};


export default FavoritesScreen;
