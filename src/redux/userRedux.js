import { createSlice } from "@reduxjs/toolkit";
// using redux toolkit so we can mutate, this will be transformed into immatuable code by redux toolkit
const userSlice = createSlice({
  name: "user",

  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },

    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },

    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    registerStart: (state) => {
      state.isFetching = true;
    },

    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
      console.log(`Current User: ${action.payload}`);
    },

    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
