import { createSlice } from "@reduxjs/toolkit";

interface User {
  uid: string | null;
  email: string | null;
  displayName: string | null;
}

type UserState = User | null;

const initialState: UserState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
