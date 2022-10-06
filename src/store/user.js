import { createSlice } from "@reduxjs/toolkit";

const initialUsers = Array.from({ length: 3 }).map((_, index) => ({
  id: Math.random(),
  firstName: "Tri " + index,
  lastName: "Pham",
  city: "Da Nang",
  country: "Vietnam",
  address: "24 TBH",
  workAt: "mgm tp",
}));

const userSlice = createSlice({
  initialState: initialUsers,
  name: "users",
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload.user);
    },
    updateUser: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.userId) {
          state[i] = action.payload.user;
        }
      }
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload.userId);
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
