import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { popReducer } from './popSlice';

const rootReducer = combineReducers({
  pop: popReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
