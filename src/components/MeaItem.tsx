import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

interface MealItemProps {
  title: string;
  imageUrl: string;
}

const MeaItem = ({ title, imageUrl }: MealItemProps) => {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MeaItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
