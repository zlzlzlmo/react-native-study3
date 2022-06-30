import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { RootStackParamList } from "../../App";
import { MEALS } from "../data/dummy-data";

type Props = NavigationStackProp<RootStackParamList, "MealsOverview">;

const MealsOverViewScreen = ({ route }: Props) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) > -1;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(renderItem) => <Text>{renderItem.item.imageUrl}</Text>}
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
