import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface MealDetailProps {
  duration: string;
  complexity: string;
  affordability: string;
}

const MealDetail = ({
  duration,
  complexity,
  affordability,
}: MealDetailProps) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m </Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
