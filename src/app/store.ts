import { configureStore,ThunkAction,Action } from '@reduxjs/toolkit';
// import movieReducer from '../features/movie/movieSlice';
import { moviesApi,moviesApiReducer } from '../services/Services'
import userSlice from '../features/user/userSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    // movie: movieReducer,
    user: userSlice,
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
