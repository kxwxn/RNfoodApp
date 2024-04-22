import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  remove: (id) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFav = (id) => {
    setFavoriteMealIds((current) => [...current, id]);
  }; // React에서는 이전 상태 스냅샷에 기반한 상태를 업데이트를 할 때 상태 업데이트함수로 어떤 함수를 전달하면 그 함수가 이전 상태 스냅샷을 수신하게 된다.
  const removeFav = (id) => {
    setFavoriteMealIds((current) => current.filter((mealId) => mealId !== id));
  };

  const value = {
    ids: favoriteMealIds,
    addFav: addFav,
    removeFav: removeFav,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
