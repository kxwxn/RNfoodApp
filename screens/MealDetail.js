import { View, Text } from "react-native";

export const MealDetail = ({ route }) => {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text>Meal detail{mealId}</Text>
    </View>
  );
};
