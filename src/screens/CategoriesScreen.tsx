import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { NavigationStackProp } from "react-navigation-stack";

interface NavigationProps {
  navigation: NavigationStackProp;
}

interface Props extends NavigationProps {}

const CategoriesScreen = ({ navigation }: Props) => {
  const pressHandler = () => {
    navigation.navigate("MealsOverview");
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(renderItem) => (
        <CategoryGridTile
          title={renderItem.item.title}
          color={renderItem.item.color}
          onPress={pressHandler}
        />
      )}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
