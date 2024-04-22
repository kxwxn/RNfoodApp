import { configureStore } from "@reduxjs/toolkit";
import favsReducer from "./favs";

export const store = configureStore({
  reducer: {
    favoriteMeals: favsReducer,
  },
});
