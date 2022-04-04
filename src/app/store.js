import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from '../features/signUp/signSlice'
import loginReducer from '../features/login/loginSlice'
import surveyReducer from '../features/survey/surveySlice';

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    login: loginReducer,
    survey: surveyReducer,
  },
});
