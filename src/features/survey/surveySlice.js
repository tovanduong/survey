import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCate, getSurvey, getSurveyOfCate, postAssignment } from './SurveyAPI/surveyAPI';

const initialState = {
  loading: false,
  errorMessage: '',
  survey: [],
  category: [],
  assignment: {},
  surveyOfCate: []
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

export const fetchGetSurveyOfCate = createAsyncThunk(
  "survey/getSurveyCate",
  async (payload) => {
    const response = await getSurveyOfCate(payload)
    return response
  }
);

export const fetchPostAssignment = createAsyncThunk(
  "survey/postAssignment",
  async (payload) => {
    const response = await postAssignment(payload)
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
    [fetchPostAssignment.pending]: (state) => {
      state.loading = true;
    },
    [fetchPostAssignment.fulfilled]: (state, action) => {
      state.loading = false;
      state.assignment = action.payload;
    },
    [fetchGetSurveyOfCate.fulfilled]: (state, action) => {
      state.surveyOfCate = action.payload;
    },
  },
});

export const { total, resetSurvey } = surveySlice.actions;

export default surveySlice.reducer;
