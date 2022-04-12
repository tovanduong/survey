import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCate, getSurvey } from './surveyAPI';

const initialState = {

  errorMessage: '',
  survey: [],
  category: []
};

export const fetchGetSurvey = createAsyncThunk(
  "survey/getSurvey",
  async (payload) => {
    const response = await getSurvey()
    return response
  }
);

export const fetchGetCategory = createAsyncThunk(
  "survey/getCategory",
  async (payload) => {
    const response = await getCate()
    return response
  }
);

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    resetSurvey: (state) => {
      state.survey = [];
      state.result = [];
      state.totalScore = 0;
      state.errorMessage = ''
    }
  },


  extraReducers: {

    [fetchGetSurvey.fulfilled]: (state, action) => {
      state.survey = action.payload;
    },

    [fetchGetCategory.fulfilled]: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { total, resetSurvey } = surveySlice.actions;

export default surveySlice.reducer;
