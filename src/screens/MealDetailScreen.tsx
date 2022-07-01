import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Meal from "../models/meal";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import List from "../components/meal-detail/List";
import Subtitle from "../components/meal-detail/Subtitle";

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
    <ScrollView>
      <Image source={imageUrl} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetail
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <Subtitle>Ingredients</Subtitle>

        <List data={ingredients} />
        <Subtitle>Steps</Subtitle>

        <List data={steps} />
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
