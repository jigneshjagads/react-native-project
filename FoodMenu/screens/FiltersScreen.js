import React, { useState, useEffect, useCallback } from 'react';
import { View, Platform, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomeHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.lable}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
}

const FiltersScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegitarian, setIsVegitarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegitarian: isVegitarian
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegitarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters })
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch lable='Gluten-Free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
      <FilterSwitch lable='Lactose-Free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
      <FilterSwitch lable='Vegan' state={isVegan} onChange={newValue => setIsVegan(newValue)} />
      <FilterSwitch lable='Vegitarian' state={isVegitarian} onChange={newValue => setIsVegitarian(newValue)} />
    </View>
  );
};


FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft:
      (
        <HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
          <Item title="Menu" iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
        <Item title="Save" iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen;
