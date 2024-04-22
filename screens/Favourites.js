import { StyleSheet, View, Text } from "react-native";
import { MealsList } from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

export const Favourites = () => {
  // const favMealsCtx = useContext(FavoritesContext);
  const favMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));

  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal yet...</Text>
      </View>
    );
  }

  return <MealsList items={favMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
