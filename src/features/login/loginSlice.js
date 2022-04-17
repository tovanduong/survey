import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postLogin, postLogout } from './loginAPI';

const initialState = {
  value: 0,
  status: 'idle',
  errorMessage: '',
  data: {},
  isLogin: false,
  locklogin: false
};

export const fetchLogin = createAsyncThunk(
  "users/postLogin",
  async (payload) => {
    const response = await postLogin(payload)
    return response
  }
);


export const fecthLogout = createAsyncThunk(
  "users/postLogout",
  async () => {
    const response = await postLogout()

    return response
  }
);

export const loginSilce = createSlice({
  name: 'login',
  initialState,

  reducers: {
    lock: (state, action) => {
      state.locklogin = action.payload
    },
  },

  extraReducers: {
    [fetchLogin.pending]: (state) => {
      state.status = 'loading';
    },

    [fetchLogin.fulfilled]: (state, action) => {
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

export const { lock } = loginSilce.actions;

export default loginSilce.reducer;
