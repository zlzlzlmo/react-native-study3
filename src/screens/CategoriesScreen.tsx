import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(renderItem) => (
          <CategoryGridTile
            title={renderItem.item.title}
            color={renderItem.item.color}
          />
        )}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
