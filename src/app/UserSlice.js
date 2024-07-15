// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userdata",
  initialState: {
    address: "",
    link:"",
    type:""
   
  },
  reducers: {
    setUserData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.address = action.payload.address;
      state.link = action.payload.link;
      state.type = action.payload.type;

    
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions;

export default userSlice.reducer;