import { createSlice } from "@reduxjs/toolkit";

const favsSlice = createSlice({
  name: "favs",
  initialState: {
    ids: [],
  },
  reducers: {
    addFav: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFav: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

// reducer로 정의하는 모든 메서드는 자동으로 최신 상태를 입력값으로 가져온다.

export const addFav = favsSlice.actions.addFav;
export const removeFav = favsSlice.actions.removeFav;

export default favsSlice.reducer;
