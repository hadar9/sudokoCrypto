import rootReducer from '../reducers';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { rootReducer: rootReducer },
});

export default store;
