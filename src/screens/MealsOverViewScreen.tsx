import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealsOverViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MealsOverViewScreen</Text>
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
