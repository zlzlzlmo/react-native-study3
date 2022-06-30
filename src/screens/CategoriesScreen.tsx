import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { NavigationStackProp } from "react-navigation-stack";
import { RootStackParamList } from "../../App";

type Props = NavigationStackProp<RootStackParamList, "MealsCategories">;

const CategoriesScreen = ({ navigation }: Props) => {
  const pressHandler = (categoryId: string) => {
    navigation.navigate("MealsOverview", {
      categoryId,
    });
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(renderItem) => (
        <CategoryGridTile
          title={renderItem.item.title}
          color={renderItem.item.color}
          onPress={pressHandler.bind(this, renderItem.item.id)}
        />
      )}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
