import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Meal from "../models/meal";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";

const MealDetailScreen = ({ route, navigation }: any) => {
  const {
    imageUrl,
    title,
    id,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = route.params;

  return (
    <View>
      <Image source={imageUrl} />
      <Text>{title}</Text>
      <MealDetail
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
      <Text>Ingredients</Text>
      {ingredients.map((ingredient: any) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}

      <Text>Steps</Text>
      {steps.map((step: any) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
