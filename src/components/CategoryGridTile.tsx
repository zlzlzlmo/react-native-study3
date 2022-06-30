import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface CategoryGridTileProps {
  title: string;
  color: string;
}
const CategoryGridTile = ({ title, color }: CategoryGridTileProps) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({});
