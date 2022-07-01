import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect as useLayoutEffect } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { RootStackParamList } from "../../App";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealItem from "../components/MeaItem";

type Props = NavigationStackProp<RootStackParamList, "MealsOverview">;

const MealsOverViewScreen = ({ route, navigation }: Props) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) > -1;
  });

  useLayoutEffect(() => {
    const category = CATEGORIES.find(({ id }) => id === catId)?.title;
    navigation.setOptions({
      title: category,
    });
  }, [catId, navigation]);

  const renderMealItem = (item: Meal) => {
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      />
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
