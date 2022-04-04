import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSurvey, postSubmitAnswer } from './surveyAPI';

const initialState = {

  status: 'idle',
  errorMessage: '',
  survey: [],
  result: [],
  totalScore: 0
};

export const fetchGetSurvey = createAsyncThunk(
  "survey/getSurvey",
  async (payload) => {
    const response = await getSurvey()
    return response
  }
);


export const fetchSubmitAnswer = createAsyncThunk(
  "survey/postSubmitAnswer",
  async (payload) => {
    const response = await postSubmitAnswer(payload)
    console.log(response)
    return response
  }
);

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    total: (state, action) => {
      state.totalScore = action.payload
<<<<<<< HEAD
    },

    resetSurvey: (state) => {
      state.survey = [];
      state.result = [];
      state.totalScore = 0;
      state.status = 'idle';
      state.errorMessage = ''
    }
  },

=======
    }
  },
>>>>>>> 6aae2cbaea81772f6f29336accfb9675a845ef67
  extraReducers: {
    [fetchGetSurvey.pending]: (state) => {
      state.status = 'loading';
    },

    [fetchGetSurvey.fulfilled]: (state, action) => {
      state.status = 'success';
      state.survey = action.payload;
    },

    [fetchGetSurvey.rejected]: (state, action) => {
      state.status = 'fail';
      state.errorMessage = action.payload;
    },

    [fetchSubmitAnswer.pending]: (state) => {
      state.status = 'loading';
    },

    [fetchSubmitAnswer.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.status = 'success';
      state.result.push(action.payload);
    },

    [fetchSubmitAnswer.rejected]: (state, action) => {
      state.status = 'fail';
      state.errorMessage = action.payload;
    },
  },
});

<<<<<<< HEAD
export const { total, resetSurvey } = surveySlice.actions;
=======
export const { total } = surveySlice.actions;
>>>>>>> 6aae2cbaea81772f6f29336accfb9675a845ef67


export default surveySlice.reducer;
