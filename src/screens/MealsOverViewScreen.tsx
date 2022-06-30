import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { RootStackParamList } from "../../App";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

type Props = NavigationStackProp<RootStackParamList, "MealsOverview">;

const MealsOverViewScreen = ({ route }: Props) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) > -1;
  });

  const renderMealItem = (item: Meal) => {
    return (
      <View>
        <Text>{item.id}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(renderItem) => renderMealItem(renderItem.item)}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
