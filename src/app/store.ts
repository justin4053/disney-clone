import { configureStore,ThunkAction,Action } from '@reduxjs/toolkit';
// import movieReducer from '../features/movie/movieSlice';
import { moviesApi,moviesApiReducer } from '../services/Services'

export const store = configureStore({
  reducer: {
    // movie: movieReducer,
    [moviesApi.reducerPath]: moviesApiReducer
  },middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
