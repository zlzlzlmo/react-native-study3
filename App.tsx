import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./src/screens/MealsOverViewScreen";

// * NavigationContainer 으로 screen 컴포넌트를 모두 감싸준다.

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {
    categoryId: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#daf336" },
            headerTintColor: "#000",
            contentStyle: {
              backgroundColor: "#556e49",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "음식 카테고리",

              // headerStyle: { backgroundColor: "#ccc" },
              // headerTintColor: "#fff",
              // contentStyle: {
              //   backgroundColor: "black",
              // },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
            options={({ route, navigation }) => {
              return {
                title: route.params.categoryId,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
