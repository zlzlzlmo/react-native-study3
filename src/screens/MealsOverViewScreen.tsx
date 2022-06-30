import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { RootStackParamList } from "../../App";

type Props = NavigationStackProp<RootStackParamList, "MealsOverview">;

const MealsOverViewScreen = ({ route }: Props) => {
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>MealsOverViewScreen - {catId}</Text>
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
