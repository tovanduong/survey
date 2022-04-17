import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCate, getSurvey, getSurveyOfCate, postAssignment, postSubmit } from './SurveyAPI/surveyAPI';

const initialState = {
  loading: false,
  errorMessage: '',
  dataAssignment: [],
  survey: [],
  category: [],
  assignment: {},
  surveyOfCate: [],
  answerCorrect: [],
  assignmentSubmit: []
};

export const fetchGetSurvey = createAsyncThunk(
  "survey/getSurvey",
  async () => {
    const response = await getSurvey()
    return response
  }
);

export const fetchGetCategory = createAsyncThunk(
  "survey/getCategory",
  async () => {
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

export const fetchPostSubmit = createAsyncThunk(
  "survey/submitAssignment",
  async (payload) => {
    const response = await postSubmit(payload)
    return response
  }
);


export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    answer: (state, action) => {
      state.answerCorrect.push(action.payload)
    },
    data: (state, action) => {
      state.dataAssignment.push(action.payload)
    },
    resetSurvey: (state) => {
      state.assignmentSubmit = [];
      state.assignment = [];
      state.dataAssignment = [];
      state.category = [];
      state.surveyOfCate = []
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
    [fetchPostSubmit.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPostSubmit.fulfilled]: (state, action) => {
      state.loading = false;
      state.assignmentSubmit = action.payload;
    },
  },
});

export const { resetSurvey, answer, data } = surveySlice.actions;

export default surveySlice.reducer;
