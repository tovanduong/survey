import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { postSignUp } from './signUpAPI';

const initialState = {
  value: 0,
  status: 'idle',
  errorMessage: '',
  data: {}
};

export const fetcPostSingUp = createAsyncThunk(
  "users/postSignUp",
  async (payload) => {
    const response = await postSignUp(payload)
    const { user } = response
    return user
  }
);


export const signUpSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [fetcPostSingUp.pending]: (state) => {
      state.status = 'loading';
    },

    [fetcPostSingUp.fulfilled]: (state, action) => {

      state.status = 'success';
      state.data = action.payload;
    },

    [fetcPostSingUp.rejected]: (state, action) => {
      state.status = 'fail';
      state.errorMessage = action.payload;
    },
  },
});

export default signUpSlice.reducer;
