import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Meal from "../models/meal";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }: any) => {
  const { imageUrl, id } = route.params;

  const selectedMeal = MEALS.find(({ id }) => id === id);

  return (
    <View>
      <Image source={selectedMeal?.imageUrl} />
      <Text>텍스트</Text>
      <View></View>
      <Text>Ingredients</Text>

      <Text>Steps</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
