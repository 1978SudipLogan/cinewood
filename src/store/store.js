import { configureStore } from '@reduxjs/toolkit'
import moviflixReducer from './moviflixSlice';

const store = configureStore({
  reducer: {
    moviflix: moviflixReducer,
  },
});

export default store;
