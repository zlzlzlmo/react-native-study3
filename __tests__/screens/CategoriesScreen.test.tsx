import { render, screen, fireEvent } from "@testing-library/react-native";
import CategoriesScreen from "../../src/screens/CategoriesScreen";

describe("<CategoriesScreen/>", () => {
  test("render 10 categories ", () => {
    render(<CategoriesScreen />);
    const categoryItem = screen.getAllByTestId("category-item");
    expect(categoryItem.length).toBe(10);
  });

  test("navigate to MealsOverview with categoryId", () => {
    const navigateMock = jest.fn();

    const navigationMock = {
      navigate: navigateMock,
    };

    render(<CategoriesScreen navigation={navigationMock} />);
    const categoryItem = screen.getAllByTestId("category-item")[0];
    fireEvent.press(categoryItem);
    expect(navigateMock).toHaveBeenCalledWith("MealsOverview", {
      categoryId: "c1",
    });
  });
});
