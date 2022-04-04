import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { postLogin, postLogout, postRefreshtoken } from './loginAPI'

const initialState = {
  value: 0,
  status: 'idle',
  errorMessage: '',
  data: {},
  isLogin: false
};

export const fetchLogin = createAsyncThunk(
  "users/postLogin",
  async (payload) => {
    const response = await postLogin(payload)
    return response
  }
);
export const fetchRefreshToken = createAsyncThunk(
  "users/postRefeshToken",
  async (payload) => {
    const response = await postRefreshtoken(payload)
    return response
  }
);

export const fecthLogout = createAsyncThunk(
  "users/postLogout",
  async (payload) => {
    const response = await postLogout(payload)

    return response
  }
);

export const loginSilce = createSlice({
  name: 'login',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  extraReducers: {
    [fetchLogin.pending]: (state) => {
      state.status = 'loading';
    },

    [fetchLogin.fulfilled]: (state, action) => {
      console.log(action)
      state.status = 'Log in success';
      state.data = action.payload;
      state.isLogin = true;
    },

    [fetchLogin.rejected]: (state, action) => {
      state.status = 'fail';
      state.errorMessage = action.payload;
    },

    [fecthLogout.fulfilled]: (state) => {
      state.status = 'Log out success';
      state.isLogin = false;
      state.data = []
    },
  },
});

// export const { } = loginSilce.actions;


export default loginSilce.reducer;
